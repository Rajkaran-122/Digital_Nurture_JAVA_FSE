-- =========================================================================
-- Exercise 7: Packages
-- =========================================================================

-- -------------------------------------------------------------------------
-- Scenario 1: CustomerManagement Package
-- -------------------------------------------------------------------------
CREATE OR REPLACE PACKAGE CustomerManagement AS
    PROCEDURE AddCustomer(p_CustomerID NUMBER, p_Name VARCHAR2, p_DOB DATE, p_Balance NUMBER);
    PROCEDURE UpdateCustomer(p_CustomerID NUMBER, p_Name VARCHAR2, p_DOB DATE);
    FUNCTION GetCustomerBalance(p_CustomerID NUMBER) RETURN NUMBER;
END CustomerManagement;
/

CREATE OR REPLACE PACKAGE BODY CustomerManagement AS
    PROCEDURE AddCustomer(p_CustomerID NUMBER, p_Name VARCHAR2, p_DOB DATE, p_Balance NUMBER) IS
    BEGIN
        INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
        VALUES (p_CustomerID, p_Name, p_DOB, p_Balance, SYSDATE);
        COMMIT;
    END AddCustomer;

    PROCEDURE UpdateCustomer(p_CustomerID NUMBER, p_Name VARCHAR2, p_DOB DATE) IS
    BEGIN
        UPDATE Customers
        SET Name = NVL(p_Name, Name), DOB = NVL(p_DOB, DOB), LastModified = SYSDATE
        WHERE CustomerID = p_CustomerID;
        
        IF SQL%ROWCOUNT = 0 THEN
            DBMS_OUTPUT.PUT_LINE('Warning: CustomerID ' || p_CustomerID || ' not found.');
        ELSE
            COMMIT;
            DBMS_OUTPUT.PUT_LINE('Customer ' || p_CustomerID || ' updated successfully.');
        END IF;
    END UpdateCustomer;

    FUNCTION GetCustomerBalance(p_CustomerID NUMBER) RETURN NUMBER IS
        v_TotalBalance NUMBER;
    BEGIN
        SELECT NVL(SUM(Balance), 0) INTO v_TotalBalance FROM Accounts WHERE CustomerID = p_CustomerID;
        RETURN v_TotalBalance;
    END GetCustomerBalance;
END CustomerManagement;
/

-- -------------------------------------------------------------------------
-- Scenario 2: EmployeeManagement Package
-- -------------------------------------------------------------------------
CREATE OR REPLACE PACKAGE EmployeeManagement AS
    PROCEDURE HireEmployee(p_EmployeeID NUMBER, p_Name VARCHAR2, p_Position VARCHAR2, p_Salary NUMBER, p_Department VARCHAR2);
    PROCEDURE UpdateEmployeeDetails(p_EmployeeID NUMBER, p_Position VARCHAR2, p_Salary NUMBER, p_Department VARCHAR2);
    FUNCTION CalculateAnnualSalary(p_EmployeeID NUMBER) RETURN NUMBER;
END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS
    PROCEDURE HireEmployee(p_EmployeeID NUMBER, p_Name VARCHAR2, p_Position VARCHAR2, p_Salary NUMBER, p_Department VARCHAR2) IS
    BEGIN
        INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
        VALUES (p_EmployeeID, p_Name, p_Position, p_Salary, p_Department, SYSDATE);
        COMMIT;
    END HireEmployee;

    PROCEDURE UpdateEmployeeDetails(p_EmployeeID NUMBER, p_Position VARCHAR2, p_Salary NUMBER, p_Department VARCHAR2) IS
    BEGIN
        UPDATE Employees
        SET Position = NVL(p_Position, Position), Salary = NVL(p_Salary, Salary), Department = NVL(p_Department, Department)
        WHERE EmployeeID = p_EmployeeID;
        
        IF SQL%ROWCOUNT = 0 THEN
            DBMS_OUTPUT.PUT_LINE('Warning: EmployeeID ' || p_EmployeeID || ' not found.');
        ELSE
            COMMIT;
            DBMS_OUTPUT.PUT_LINE('Employee ' || p_EmployeeID || ' details updated successfully.');
        END IF;
    END UpdateEmployeeDetails;

    FUNCTION CalculateAnnualSalary(p_EmployeeID NUMBER) RETURN NUMBER IS
        v_MonthlySalary NUMBER;
    BEGIN
        SELECT Salary INTO v_MonthlySalary FROM Employees WHERE EmployeeID = p_EmployeeID;
        RETURN v_MonthlySalary * 12;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN RETURN 0;
    END CalculateAnnualSalary;
END EmployeeManagement;
/

-- -------------------------------------------------------------------------
-- Scenario 3: AccountOperations Package
-- -------------------------------------------------------------------------
CREATE OR REPLACE PACKAGE AccountOperations AS
    PROCEDURE OpenAccount(p_AccountID NUMBER, p_CustomerID NUMBER, p_AccountType VARCHAR2, p_InitialDeposit NUMBER);
    PROCEDURE CloseAccount(p_AccountID NUMBER);
    FUNCTION GetTotalBalance(p_CustomerID NUMBER) RETURN NUMBER;
END AccountOperations;
/

CREATE OR REPLACE PACKAGE BODY AccountOperations AS
    PROCEDURE OpenAccount(p_AccountID NUMBER, p_CustomerID NUMBER, p_AccountType VARCHAR2, p_InitialDeposit NUMBER) IS
    BEGIN
        INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
        VALUES (p_AccountID, p_CustomerID, p_AccountType, p_InitialDeposit, SYSDATE);
        COMMIT;
    END OpenAccount;

    PROCEDURE CloseAccount(p_AccountID NUMBER) IS
    BEGIN
        -- Option: archiving or deleting. We'll delete for this example.
        DELETE FROM Accounts WHERE AccountID = p_AccountID;
        
        IF SQL%ROWCOUNT = 0 THEN
            DBMS_OUTPUT.PUT_LINE('Warning: AccountID ' || p_AccountID || ' not found.');
        ELSE
            COMMIT;
            DBMS_OUTPUT.PUT_LINE('Account ' || p_AccountID || ' closed successfully.');
        END IF;
    END CloseAccount;

    FUNCTION GetTotalBalance(p_CustomerID NUMBER) RETURN NUMBER IS
        v_Total NUMBER;
    BEGIN
        SELECT NVL(SUM(Balance), 0) INTO v_Total FROM Accounts WHERE CustomerID = p_CustomerID;
        RETURN v_Total;
    END GetTotalBalance;
END AccountOperations;
/

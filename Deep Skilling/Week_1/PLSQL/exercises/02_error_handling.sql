-- =========================================================================
-- Exercise 2: Error Handling
-- =========================================================================

SET SERVEROUTPUT ON;

-- -------------------------------------------------------------------------
-- Scenario 1: SafeTransferFunds Procedure
-- Description: Handle exceptions during fund transfers between accounts.
-- -------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE SafeTransferFunds(
    p_FromAccountID IN NUMBER,
    p_ToAccountID IN NUMBER,
    p_Amount IN NUMBER
) IS
    v_FromBalance NUMBER;
    e_InsufficientFunds EXCEPTION;
BEGIN
    -- Check balance of the source account
    SELECT Balance INTO v_FromBalance FROM Accounts WHERE AccountID = p_FromAccountID FOR UPDATE;
    
    IF v_FromBalance < p_Amount THEN
        RAISE e_InsufficientFunds;
    END IF;
    
    -- Deduct from source account
    UPDATE Accounts SET Balance = Balance - p_Amount WHERE AccountID = p_FromAccountID;
    
    -- Add to destination account
    UPDATE Accounts SET Balance = Balance + p_Amount WHERE AccountID = p_ToAccountID;
    
    -- Record transactions
    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES ((SELECT NVL(MAX(TransactionID), 0) + 1 FROM Transactions), p_FromAccountID, SYSDATE, p_Amount, 'Transfer-O');
    
    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES ((SELECT NVL(MAX(TransactionID), 0) + 2 FROM Transactions), p_ToAccountID, SYSDATE, p_Amount, 'Transfer-I');
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Transfer successful.');

EXCEPTION
    WHEN e_InsufficientFunds THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in account ' || p_FromAccountID);
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: One or both account IDs do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: An unexpected error occurred - ' || SQLERRM);
END SafeTransferFunds;
/

-- -------------------------------------------------------------------------
-- Scenario 2: UpdateSalary Procedure
-- Description: Manage errors when updating employee salaries.
-- -------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE UpdateSalary(
    p_EmployeeID IN NUMBER,
    p_Percentage IN NUMBER
) IS
    v_EmployeeExists NUMBER;
    e_EmployeeNotFound EXCEPTION;
BEGIN
    -- Check if employee exists
    SELECT COUNT(*) INTO v_EmployeeExists FROM Employees WHERE EmployeeID = p_EmployeeID;
    
    IF v_EmployeeExists = 0 THEN
        RAISE e_EmployeeNotFound;
    END IF;
    
    -- Update salary
    UPDATE Employees 
    SET Salary = Salary + (Salary * p_Percentage / 100)
    WHERE EmployeeID = p_EmployeeID;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Salary updated successfully for Employee ' || p_EmployeeID);

EXCEPTION
    WHEN e_EmployeeNotFound THEN
        DBMS_OUTPUT.PUT_LINE('Error: Employee with ID ' || p_EmployeeID || ' does not exist.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: An unexpected error occurred - ' || SQLERRM);
END UpdateSalary;
/

-- -------------------------------------------------------------------------
-- Scenario 3: AddNewCustomer Procedure
-- Description: Ensure data integrity when adding a new customer.
-- -------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE AddNewCustomer(
    p_CustomerID IN NUMBER,
    p_Name IN VARCHAR2,
    p_DOB IN DATE,
    p_Balance IN NUMBER
) IS
    e_DuplicateCustomer EXCEPTION;
    PRAGMA EXCEPTION_INIT(e_DuplicateCustomer, -1); -- ORA-00001: unique constraint violated
BEGIN
    INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
    VALUES (p_CustomerID, p_Name, p_DOB, p_Balance, SYSDATE);
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Customer ' || p_Name || ' added successfully.');

EXCEPTION
    WHEN e_DuplicateCustomer THEN
        DBMS_OUTPUT.PUT_LINE('Error: A customer with ID ' || p_CustomerID || ' already exists.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: An unexpected error occurred - ' || SQLERRM);
END AddNewCustomer;
/

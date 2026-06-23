-- =========================================================================
-- Exercise 3: Stored Procedures
-- =========================================================================

SET SERVEROUTPUT ON;

-- -------------------------------------------------------------------------
-- Scenario 1: ProcessMonthlyInterest Procedure
-- Description: Process monthly interest for all savings accounts (1%).
-- -------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly interest of 1% processed for all Savings accounts.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error processing interest: ' || SQLERRM);
END ProcessMonthlyInterest;
/

-- -------------------------------------------------------------------------
-- Scenario 2: UpdateEmployeeBonus Procedure
-- Description: Update salary of employees in a department by adding a bonus %.
-- -------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_Department IN VARCHAR2,
    p_BonusPercentage IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_BonusPercentage / 100)
    WHERE Department = p_Department;
    
    IF SQL%ROWCOUNT = 0 THEN
        DBMS_OUTPUT.PUT_LINE('No employees found in department: ' || p_Department);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_BonusPercentage || '% applied to department: ' || p_Department);
    END IF;
    
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating bonuses: ' || SQLERRM);
END UpdateEmployeeBonus;
/

-- -------------------------------------------------------------------------
-- Scenario 3: TransferFunds Procedure
-- Description: Transfer funds between accounts checking sufficient balance.
-- -------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_FromAccountID IN NUMBER,
    p_ToAccountID IN NUMBER,
    p_Amount IN NUMBER
) IS
    v_FromBalance NUMBER;
BEGIN
    -- Get current balance
    SELECT Balance INTO v_FromBalance FROM Accounts WHERE AccountID = p_FromAccountID FOR UPDATE;
    
    IF v_FromBalance >= p_Amount THEN
        -- Deduct from sender
        UPDATE Accounts SET Balance = Balance - p_Amount WHERE AccountID = p_FromAccountID;
        
        -- Add to receiver
        UPDATE Accounts SET Balance = Balance + p_Amount WHERE AccountID = p_ToAccountID;
        
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Successfully transferred ' || p_Amount || ' from Account ' || p_FromAccountID || ' to ' || p_ToAccountID);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in Account ' || p_FromAccountID);
        ROLLBACK;
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: Invalid Account ID provided.');
        ROLLBACK;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error during transfer: ' || SQLERRM);
        ROLLBACK;
END TransferFunds;
/

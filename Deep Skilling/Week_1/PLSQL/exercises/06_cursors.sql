-- =========================================================================
-- Exercise 6: Cursors
-- =========================================================================

SET SERVEROUTPUT ON;

-- -------------------------------------------------------------------------
-- Scenario 1: GenerateMonthlyStatements
-- Description: Retrieves all transactions for current month and prints statement.
-- -------------------------------------------------------------------------
DECLARE
    CURSOR GenerateMonthlyStatements IS
        SELECT t.TransactionID, t.AccountID, c.CustomerID, c.Name, t.TransactionDate, t.Amount, t.TransactionType
        FROM Transactions t
        JOIN Accounts a ON t.AccountID = a.AccountID
        JOIN Customers c ON a.CustomerID = c.CustomerID
        WHERE EXTRACT(MONTH FROM t.TransactionDate) = EXTRACT(MONTH FROM SYSDATE)
          AND EXTRACT(YEAR FROM t.TransactionDate) = EXTRACT(YEAR FROM SYSDATE)
        ORDER BY c.CustomerID, t.TransactionDate;
        
    v_CurrentCustomer NUMBER := -1;
BEGIN
    FOR rec IN GenerateMonthlyStatements LOOP
        IF rec.CustomerID != v_CurrentCustomer THEN
            DBMS_OUTPUT.PUT_LINE('----------------------------------------------------');
            DBMS_OUTPUT.PUT_LINE('Statement for: ' || rec.Name || ' (ID: ' || rec.CustomerID || ')');
            DBMS_OUTPUT.PUT_LINE('Month: ' || TO_CHAR(SYSDATE, 'Month YYYY'));
            DBMS_OUTPUT.PUT_LINE('----------------------------------------------------');
            v_CurrentCustomer := rec.CustomerID;
        END IF;

        DBMS_OUTPUT.PUT_LINE('Date: ' || TO_CHAR(rec.TransactionDate, 'YYYY-MM-DD') || 
                             ' | Type: ' || RPAD(rec.TransactionType, 12) || 
                             ' | Amount: $' || rec.Amount);
    END LOOP;
END;
/

-- -------------------------------------------------------------------------
-- Scenario 2: ApplyAnnualFee
-- Description: Deducts an annual maintenance fee from all accounts.
-- -------------------------------------------------------------------------
DECLARE
    v_FeeAmount NUMBER := 50; -- Define an annual fee of $50
    CURSOR ApplyAnnualFee IS
        SELECT AccountID, Balance FROM Accounts FOR UPDATE OF Balance;
BEGIN
    FOR rec IN ApplyAnnualFee LOOP
        UPDATE Accounts
        SET Balance = rec.Balance - v_FeeAmount
        WHERE CURRENT OF ApplyAnnualFee;
        
        -- Optionally insert a transaction record for the fee
        INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
        VALUES ((SELECT NVL(MAX(TransactionID), 0) + 1 FROM Transactions), rec.AccountID, SYSDATE, v_FeeAmount, 'AnnualFee');
        
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Annual fee of $' || v_FeeAmount || ' applied to all accounts.');
END;
/

-- -------------------------------------------------------------------------
-- Scenario 3: UpdateLoanInterestRates
-- Description: Fetches all loans and updates interest rates based on a new policy.
-- -------------------------------------------------------------------------
DECLARE
    -- Suppose new policy adds 0.5% to all existing loans
    v_RateIncrease NUMBER := 0.5;
    
    CURSOR UpdateLoanInterestRates IS
        SELECT LoanID, InterestRate FROM Loans FOR UPDATE OF InterestRate;
BEGIN
    FOR rec IN UpdateLoanInterestRates LOOP
        UPDATE Loans
        SET InterestRate = rec.InterestRate + v_RateIncrease
        WHERE CURRENT OF UpdateLoanInterestRates;
        
        DBMS_OUTPUT.PUT_LINE('Loan ID: ' || rec.LoanID || ' | Old Rate: ' || rec.InterestRate || '% | New Rate: ' || (rec.InterestRate + v_RateIncrease) || '%');
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Loan interest rates updated according to the new policy.');
END;
/

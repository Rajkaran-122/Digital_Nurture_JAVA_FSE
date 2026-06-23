-- =========================================================================
-- Exercise 1: Control Structures
-- =========================================================================

SET SERVEROUTPUT ON;

-- -------------------------------------------------------------------------
-- Scenario 1: Apply a discount to loan interest rates for customers above 60.
-- -------------------------------------------------------------------------
DECLARE
    v_age NUMBER;
BEGIN
    FOR loan_rec IN (
        SELECT l.LoanID, l.CustomerID, l.InterestRate, c.DOB 
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
    ) LOOP
        -- Calculate age
        v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, loan_rec.DOB) / 12);
        
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = loan_rec.LoanID;
            
            DBMS_OUTPUT.PUT_LINE('Discount applied for CustomerID: ' || loan_rec.CustomerID || '. New Rate: ' || (loan_rec.InterestRate - 1) || '%');
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- -------------------------------------------------------------------------
-- Scenario 2: Promote customer to VIP status based on balance > $10,000.
-- Note: Modifying the Customers table to include IsVIP column.
-- -------------------------------------------------------------------------

-- First, add the IsVIP column if it doesn't exist
ALTER TABLE Customers ADD IsVIP VARCHAR2(5) DEFAULT 'FALSE';

DECLARE
BEGIN
    FOR cust_rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF cust_rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust_rec.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE('Customer ' || cust_rec.CustomerID || ' promoted to VIP status.');
        ELSE
            UPDATE Customers
            SET IsVIP = 'FALSE'
            WHERE CustomerID = cust_rec.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- -------------------------------------------------------------------------
-- Scenario 3: Send reminders to customers whose loans are due within the next 30 days.
-- -------------------------------------------------------------------------
DECLARE
BEGIN
    FOR loan_rec IN (
        SELECT l.LoanID, l.CustomerID, c.Name, l.EndDate, (l.EndDate - SYSDATE) AS DaysDue
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || loan_rec.Name || ' (ID: ' || loan_rec.CustomerID || '), your loan ' || loan_rec.LoanID || ' is due in ' || ROUND(loan_rec.DaysDue) || ' days.');
    END LOOP;
END;
/

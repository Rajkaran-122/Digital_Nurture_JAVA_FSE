-- =========================================================================
-- Exercise 4: Functions
-- =========================================================================

SET SERVEROUTPUT ON;

-- -------------------------------------------------------------------------
-- Scenario 1: CalculateAge Function
-- Description: Calculate age of customers for eligibility checks.
-- -------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION CalculateAge(p_DOB IN DATE) RETURN NUMBER IS
    v_Age NUMBER;
BEGIN
    -- Calculate age in years
    v_Age := TRUNC(MONTHS_BETWEEN(SYSDATE, p_DOB) / 12);
    RETURN v_Age;
END CalculateAge;
/

-- -------------------------------------------------------------------------
-- Scenario 2: CalculateMonthlyInstallment Function
-- Description: Compute monthly installment for a loan using standard
--              amortization formula.
-- -------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment(
    p_LoanAmount IN NUMBER,
    p_AnnualInterestRate IN NUMBER,
    p_DurationYears IN NUMBER
) RETURN NUMBER IS
    v_MonthlyRate NUMBER;
    v_TotalMonths NUMBER;
    v_MonthlyInstallment NUMBER;
BEGIN
    -- Handle 0% interest rate case
    IF p_AnnualInterestRate = 0 THEN
        RETURN p_LoanAmount / (p_DurationYears * 12);
    END IF;

    -- Calculate monthly interest rate (percentage to decimal / 12)
    v_MonthlyRate := (p_AnnualInterestRate / 100) / 12;
    v_TotalMonths := p_DurationYears * 12;
    
    -- Standard Amortization Formula: A = P * [r(1+r)^n] / [(1+r)^n - 1]
    v_MonthlyInstallment := p_LoanAmount * 
                            (v_MonthlyRate * POWER(1 + v_MonthlyRate, v_TotalMonths)) / 
                            (POWER(1 + v_MonthlyRate, v_TotalMonths) - 1);
                            
    RETURN ROUND(v_MonthlyInstallment, 2);
END CalculateMonthlyInstallment;
/

-- -------------------------------------------------------------------------
-- Scenario 3: HasSufficientBalance Function
-- Description: Check if a customer has sufficient balance before transaction.
-- -------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION HasSufficientBalance(
    p_AccountID IN NUMBER,
    p_Amount IN NUMBER
) RETURN BOOLEAN IS
    v_Balance NUMBER;
BEGIN
    SELECT Balance INTO v_Balance FROM Accounts WHERE AccountID = p_AccountID;
    
    IF v_Balance >= p_Amount THEN
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
    
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        -- If account doesn't exist, return FALSE
        RETURN FALSE;
    WHEN OTHERS THEN
        RETURN FALSE;
END HasSufficientBalance;
/

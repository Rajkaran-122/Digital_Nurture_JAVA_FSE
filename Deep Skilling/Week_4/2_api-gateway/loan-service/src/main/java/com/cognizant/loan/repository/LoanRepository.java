package com.cognizant.loan.repository;

import com.cognizant.loan.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoanRepository extends JpaRepository<Loan, String> {

    Optional<Loan> findLoanByNumber(String number);
}

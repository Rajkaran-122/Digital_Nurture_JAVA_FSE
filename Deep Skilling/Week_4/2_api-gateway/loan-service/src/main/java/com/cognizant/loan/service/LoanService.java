package com.cognizant.loan.service;
import com.cognizant.loan.entity.Loan;
import com.cognizant.loan.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class LoanService {
    private final LoanRepository loanRepository;

    public Loan getLoan(String number) {
        return loanRepository.findLoanByNumber(number)
                .orElseThrow(() -> new RuntimeException("loan not found by this number"));
    }
}

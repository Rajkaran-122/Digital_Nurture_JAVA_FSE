package com.cognizant.loan.controller;
import com.cognizant.loan.entity.Loan;
import com.cognizant.loan.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController @RequiredArgsConstructor
@RequestMapping("/loans")
public class LoanController {
    private final LoanService loanService;

    @GetMapping("/{number}")
    public Loan getLoan(@PathVariable String number) {
        return loanService.getLoan(number);
    }
}

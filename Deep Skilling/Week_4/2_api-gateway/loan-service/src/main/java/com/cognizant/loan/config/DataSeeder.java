package com.cognizant.loan.config;
import com.cognizant.loan.entity.Loan;
import com.cognizant.loan.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {
    private final LoanRepository repository;
    public void run(String... args) {
        repository.save(Loan.builder()
                .number("H00987987972342")
                .type("car").loan(400000L)
                .emi(3258)
                .tenure(18)
                .build());
    }
}

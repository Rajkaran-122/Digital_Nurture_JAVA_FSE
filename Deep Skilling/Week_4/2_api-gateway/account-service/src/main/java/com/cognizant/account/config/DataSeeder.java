package com.cognizant.account.config;

import com.cognizant.account.entity.Account;
import com.cognizant.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {
    private final AccountRepository repository;

    public void run(String... args) {
        repository.save(Account.builder()
                .number("00987987973432")
                .type("savings")
                .balance(234343L)
                .build());
    }
}

package com.cognizant.account.service;

import com.cognizant.account.entity.Account;
import com.cognizant.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    public Account getAccount(String number) {
        return accountRepository.findById(number)
                .orElseThrow(() -> new RuntimeException("account not found"));
    }
}

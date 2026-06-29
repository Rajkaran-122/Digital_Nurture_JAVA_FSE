package com.cognizant.ormqueryhandson.service;

import com.cognizant.ormqueryhandson.model.Attempt;
import com.cognizant.ormqueryhandson.repository.AttemptRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// business logic layer
@Service
// business logic layer
public class AttemptService {

    private static final Logger LOGGER = LoggerFactory.getLogger(AttemptService.class);
    private final AttemptRepository attemptRepository;

    public AttemptService(AttemptRepository attemptRepository) {
        this.attemptRepository = attemptRepository;
    }

    @Transactional(readOnly = true)
    public Attempt getAttempt(int userId, int attemptId) {
        LOGGER.info("Start");
        Attempt attempt = attemptRepository.getAttempt(userId, attemptId).orElseThrow();
        LOGGER.info("End");
        return attempt;
    }
}


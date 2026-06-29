package com.cognizant.ormqueryhandson.service;

import com.cognizant.ormqueryhandson.model.Skill;
import com.cognizant.ormqueryhandson.repository.SkillRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// business logic layer
@Service
// business logic layer
public class SkillService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SkillService.class);
    private final SkillRepository skillRepository;

    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    @Transactional(readOnly = true)
    public Skill get(int id) {
        LOGGER.info("Start");
        Skill skill = skillRepository.findById(id).orElseThrow();
        LOGGER.info("End");
        return skill;
    }

    @Transactional
    public void save(Skill skill) {
        LOGGER.info("Start");
        skillRepository.save(skill);
        LOGGER.info("End");
    }
}


package com.cognizant.ormqueryhandson.repository;

import com.cognizant.ormqueryhandson.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

// jpa data access
public interface SkillRepository extends JpaRepository<Skill, Integer> {
}


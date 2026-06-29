package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

// jpa data access
public interface SkillRepository extends JpaRepository<Skill, Integer> {
}


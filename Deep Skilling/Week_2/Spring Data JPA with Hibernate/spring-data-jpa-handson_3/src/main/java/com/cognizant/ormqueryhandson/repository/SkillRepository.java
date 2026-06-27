package com.cognizant.ormqueryhandson.repository;

import com.cognizant.ormqueryhandson.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Integer> {
}

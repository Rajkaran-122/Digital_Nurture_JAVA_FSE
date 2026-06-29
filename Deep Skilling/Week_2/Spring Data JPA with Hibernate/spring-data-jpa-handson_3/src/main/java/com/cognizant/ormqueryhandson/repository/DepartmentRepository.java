package com.cognizant.ormqueryhandson.repository;

import com.cognizant.ormqueryhandson.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

// jpa data access
public interface DepartmentRepository extends JpaRepository<Department, Integer> {
}


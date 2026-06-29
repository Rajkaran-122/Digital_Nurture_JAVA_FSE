package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

// jpa data access
public interface DepartmentRepository extends JpaRepository<Department, Integer> {
}


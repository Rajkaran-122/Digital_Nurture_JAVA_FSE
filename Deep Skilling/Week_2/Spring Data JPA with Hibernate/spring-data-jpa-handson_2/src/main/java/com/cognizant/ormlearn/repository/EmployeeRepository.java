package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

// jpa data access
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}


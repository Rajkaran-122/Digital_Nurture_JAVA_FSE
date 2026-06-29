package com.cognizant.ormlearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Employee;

// jpa data access
@Repository
// jpa data access
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}


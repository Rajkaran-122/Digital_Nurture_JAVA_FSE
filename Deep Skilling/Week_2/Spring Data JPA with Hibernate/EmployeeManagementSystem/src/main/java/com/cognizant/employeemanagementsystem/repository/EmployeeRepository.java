package com.cognizant.employeemanagementsystem.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.employeemanagementsystem.model.Employee;
import com.cognizant.employeemanagementsystem.projection.EmployeeProjection;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Derived query method
    List<Employee> findByNameContainingIgnoreCase(String name);

    // Custom query with @Query
    @Query("SELECT e FROM Employee e WHERE e.email LIKE %:domain%")
    List<Employee> findByEmailDomain(String domain);

    // Pagination, Sorting, and N+1 fix
    @EntityGraph(attributePaths = {"department"})
    Page<Employee> findAll(Pageable pageable);

    // Projection
    List<EmployeeProjection> findProjectedBy();
}

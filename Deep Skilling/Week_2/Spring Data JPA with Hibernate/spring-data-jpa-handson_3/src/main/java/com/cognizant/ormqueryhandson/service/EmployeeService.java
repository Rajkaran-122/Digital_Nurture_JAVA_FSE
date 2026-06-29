package com.cognizant.ormqueryhandson.service;

import com.cognizant.ormqueryhandson.model.Employee;
import com.cognizant.ormqueryhandson.repository.EmployeeRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// business logic layer
@Service
// business logic layer
public class EmployeeService {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeService.class);
    private final EmployeeRepository employeeRepository;
    private final EntityManager entityManager;

    public EmployeeService(EmployeeRepository employeeRepository, EntityManager entityManager) {
        this.employeeRepository = employeeRepository;
        this.entityManager = entityManager;
    }

    @Transactional(readOnly = true)
    public Employee get(int id) {
        LOGGER.info("Start");
        Employee employee = employeeRepository.findById(id).orElseThrow();
        LOGGER.info("End");
        return employee;
    }

    @Transactional
    public void save(Employee employee) {
        LOGGER.info("Start");
        employeeRepository.save(employee);
        LOGGER.info("End");
    }

    @Transactional(readOnly = true)
    public List<Employee> getAllPermanentEmployees() {
        LOGGER.info("Start");
        List<Employee> employees = employeeRepository.getAllPermanentEmployees();
        LOGGER.info("End");
        return employees;
    }

    @Transactional(readOnly = true)
    public Double getAverageSalary() {
        LOGGER.info("Start");
        Double average = employeeRepository.getAverageSalary();
        LOGGER.info("End");
        return average;
    }

    @Transactional(readOnly = true)
    public Double getAverageSalary(int departmentId) {
        LOGGER.info("Start");
        Double average = employeeRepository.getAverageSalary(departmentId);
        LOGGER.info("End");
        return average;
    }

    @Transactional(readOnly = true)
    public List<Employee> getAllEmployeesNative() {
        LOGGER.info("Start");
        List<Employee> employees = employeeRepository.getAllEmployeesNative();
        LOGGER.info("End");
        return employees;
    }

    @Transactional(readOnly = true)
    public List<Employee> searchEmployees(String name, Boolean permanent, Integer departmentId, Double minimumSalary) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Employee> criteriaQuery = criteriaBuilder.createQuery(Employee.class);
        Root<Employee> root = criteriaQuery.from(Employee.class);
        List<Predicate> predicates = new ArrayList<>();

        if (name != null && !name.isBlank()) {
            predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%" + name.toLowerCase() + "%"));
        }

        if (permanent != null) {
            predicates.add(criteriaBuilder.equal(root.get("permanent"), permanent));
        }

        if (departmentId != null) {
            predicates.add(criteriaBuilder.equal(root.get("department").get("id"), departmentId));
        }

        if (minimumSalary != null) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("salary"), minimumSalary));
        }

        criteriaQuery.select(root).where(predicates.toArray(new Predicate[0]));
        TypedQuery<Employee> query = entityManager.createQuery(criteriaQuery);
        return query.getResultList();
    }
}


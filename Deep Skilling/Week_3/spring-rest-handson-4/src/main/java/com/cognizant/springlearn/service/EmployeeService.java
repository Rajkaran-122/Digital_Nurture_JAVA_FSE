package com.cognizant.springlearn.service;

import com.cognizant.springlearn.dao.EmployeeDao;
import com.cognizant.springlearn.exception.EmployeeNotFoundException;
import com.cognizant.springlearn.model.Employee;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeDao employeeDao;

    @Transactional
    public List<Employee> getAllEmployees() {
        log.info("Start");
        List<Employee> employees = employeeDao.getAllEmployees();
        log.info("End");
        return employees;
    }

    @Transactional
    public void updateEmployee(Employee employee) throws EmployeeNotFoundException {
        log.info("Start");
        employeeDao.updateEmployee(employee);
        log.info("End");
    }

    @Transactional
    public void deleteEmployee(Integer id) throws EmployeeNotFoundException {
        log.info("Start");
        employeeDao.deleteEmployee(id);
        log.info("End");
    }
}

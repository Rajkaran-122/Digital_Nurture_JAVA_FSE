package com.cognizant.springlearn.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.cognizant.springlearn.dao.EmployeeDao;
import com.cognizant.springlearn.model.Employee;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeDao employeeDao;

    @Transactional(readOnly = true)
    public List<Employee> getAllEmployees() {
        log.info("START");
        List<Employee> employees = employeeDao.getAllEmployees();
        log.debug("Employees from service: {}", employees);
        log.info("END");
        return employees;
    }
}

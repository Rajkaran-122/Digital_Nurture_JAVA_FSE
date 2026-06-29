package com.cognizant.springlearn.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.springlearn.model.Employee;
import com.cognizant.springlearn.service.EmployeeService;

import java.util.List;

@Slf4j
// handling rest endpoints
@RestController
@RequiredArgsConstructor
// handling rest endpoints
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        log.info("START");
        List<Employee> employees = employeeService.getAllEmployees();
        log.debug("Employees response: {}", employees);
        log.info("END");
        return employees;
    }
}


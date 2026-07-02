package com.cognizant.springlearn.service;

import com.cognizant.springlearn.exception.EmployeeNotFoundException;
import com.cognizant.springlearn.model.Employee;
import com.cognizant.springlearn.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Transactional(readOnly = true)
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Transactional
    public void updateEmployee(Employee employee) throws EmployeeNotFoundException {
        if (employee.getId() == null || !employeeRepository.existsById(employee.getId())) {
            throw new EmployeeNotFoundException();
        }
        employeeRepository.save(employee);
    }

    @Transactional
    public void deleteEmployee(Integer id) throws EmployeeNotFoundException {
        if (!employeeRepository.existsById(id)) {
            throw new EmployeeNotFoundException();
        }
        employeeRepository.deleteById(id);
    }
}


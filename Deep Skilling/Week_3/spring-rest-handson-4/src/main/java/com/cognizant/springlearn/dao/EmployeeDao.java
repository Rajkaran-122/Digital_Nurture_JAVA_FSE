package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.exception.EmployeeNotFoundException;
import com.cognizant.springlearn.model.Employee;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Repository
public class EmployeeDao {
    public static final List<Employee> EMPLOYEE_LIST = new ArrayList<>();

    public EmployeeDao() {
        log.info("Start");
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        EMPLOYEE_LIST.addAll(context.getBean("employeeList", List.class));
        log.info("End");
    }

    public List<Employee> getAllEmployees() {
        log.info("Start");
        log.info("End");
        return EMPLOYEE_LIST;
    }

    public void updateEmployee(Employee employee) throws EmployeeNotFoundException {
        log.info("Start");
        for (int i = 0; i < EMPLOYEE_LIST.size(); i++) {
            if (EMPLOYEE_LIST.get(i).getId().equals(employee.getId())) {
                EMPLOYEE_LIST.set(i, employee);
                log.info("End");
                return;
            }
        }
        throw new EmployeeNotFoundException();
    }

    public void deleteEmployee(Integer id) throws EmployeeNotFoundException {
        log.info("Start");
        boolean removed = EMPLOYEE_LIST.removeIf(employee -> employee.getId().equals(id));
        if (!removed) {
            throw new EmployeeNotFoundException();
        }
        log.info("End");
    }
}

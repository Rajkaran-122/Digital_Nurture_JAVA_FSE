package com.cognizant.springlearn.dao;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;
import com.cognizant.springlearn.model.Employee;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Repository
public class EmployeeDao {

    private static ArrayList<Employee> EMPLOYEE_LIST;

    public EmployeeDao() {
        log.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        EMPLOYEE_LIST = context.getBean("employeeList", ArrayList.class);
        log.debug("Employee list loaded: {}", EMPLOYEE_LIST);
        log.info("END");
    }

    public List<Employee> getAllEmployees() {
        log.info("START");
        log.debug("Employees: {}", EMPLOYEE_LIST);
        log.info("END");
        return EMPLOYEE_LIST;
    }
}

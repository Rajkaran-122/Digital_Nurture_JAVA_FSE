package com.cognizant.springlearn.dao;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;
import com.cognizant.springlearn.model.Department;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Repository
public class DepartmentDao {

    private static ArrayList<Department> DEPARTMENT_LIST;

    public DepartmentDao() {
        log.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        DEPARTMENT_LIST = context.getBean("departmentList", ArrayList.class);
        log.debug("Department list loaded: {}", DEPARTMENT_LIST);
        log.info("END");
    }

    public List<Department> getAllDepartments() {
        log.info("START");
        log.debug("Departments: {}", DEPARTMENT_LIST);
        log.info("END");
        return DEPARTMENT_LIST;
    }
}

package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Department;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Repository
public class DepartmentDao {
    public static final List<Department> DEPARTMENT_LIST = new ArrayList<>();

    public DepartmentDao() {
        log.info("Start");
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        DEPARTMENT_LIST.addAll(context.getBean("departmentList", List.class));
        log.info("End");
    }

    public List<Department> getAllDepartments() {
        log.info("Start");
        log.info("End");
        return DEPARTMENT_LIST;
    }
}

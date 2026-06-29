package com.cognizant.springlearn.service;

import com.cognizant.springlearn.dao.DepartmentDao;
import com.cognizant.springlearn.model.Department;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DepartmentService {
    private final DepartmentDao departmentDao;

    public List<Department> getAllDepartments() {
        log.info("Start");
        List<Department> departments = departmentDao.getAllDepartments();
        log.info("End");
        return departments;
    }
}

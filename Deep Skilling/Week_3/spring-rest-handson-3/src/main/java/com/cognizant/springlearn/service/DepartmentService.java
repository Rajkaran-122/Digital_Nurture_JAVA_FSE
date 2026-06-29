package com.cognizant.springlearn.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.cognizant.springlearn.dao.DepartmentDao;
import com.cognizant.springlearn.model.Department;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DepartmentService {

    private final DepartmentDao departmentDao;

    @Transactional(readOnly = true)
    public List<Department> getAllDepartments() {
        log.info("START");
        List<Department> departments = departmentDao.getAllDepartments();
        log.debug("Departments from service: {}", departments);
        log.info("END");
        return departments;
    }
}

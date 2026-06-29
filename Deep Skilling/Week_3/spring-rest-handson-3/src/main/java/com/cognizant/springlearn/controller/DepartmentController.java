package com.cognizant.springlearn.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.springlearn.model.Department;
import com.cognizant.springlearn.service.DepartmentService;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;

    @GetMapping("/departments")
    public List<Department> getAllDepartments() {
        log.info("START");
        List<Department> departments = departmentService.getAllDepartments();
        log.debug("Departments response: {}", departments);
        log.info("END");
        return departments;
    }

}

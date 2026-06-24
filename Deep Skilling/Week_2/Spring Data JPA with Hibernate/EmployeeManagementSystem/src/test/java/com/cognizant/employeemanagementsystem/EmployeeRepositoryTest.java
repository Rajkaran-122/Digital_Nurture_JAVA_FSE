package com.cognizant.employeemanagementsystem;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.cognizant.employeemanagementsystem.model.Department;
import com.cognizant.employeemanagementsystem.model.Employee;
import com.cognizant.employeemanagementsystem.repository.DepartmentRepository;
import com.cognizant.employeemanagementsystem.repository.EmployeeRepository;

@DataJpaTest
public class EmployeeRepositoryTest {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Test
    public void testSaveAndFindEmployee() {
        Department dept = new Department();
        dept.setName("IT");
        departmentRepository.save(dept);

        Employee emp = new Employee();
        emp.setName("John Doe");
        emp.setEmail("john.doe@example.com");
        emp.setDepartment(dept);
        employeeRepository.save(emp);

        Page<Employee> page = employeeRepository.findAll(PageRequest.of(0, 10));
        assertThat(page.getTotalElements()).isGreaterThan(0);
        assertThat(page.getContent().get(0).getName()).isEqualTo("John Doe");
        assertThat(page.getContent().get(0).getDepartment().getName()).isEqualTo("IT");
    }
}

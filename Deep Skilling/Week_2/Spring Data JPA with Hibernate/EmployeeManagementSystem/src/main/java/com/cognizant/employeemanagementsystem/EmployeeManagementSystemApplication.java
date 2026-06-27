package com.cognizant.employeemanagementsystem;

import com.cognizant.employeemanagementsystem.entity.Department;
import com.cognizant.employeemanagementsystem.entity.Employee;
import com.cognizant.employeemanagementsystem.service.DepartmentService;
import com.cognizant.employeemanagementsystem.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import java.util.List;

@Slf4j
@SpringBootApplication
@RequiredArgsConstructor
public class EmployeeManagementSystemApplication implements CommandLineRunner {

        private final EmployeeService employeeService;
        private final DepartmentService departmentService;

        public static void main(String[] args) {
                SpringApplication.run(EmployeeManagementSystemApplication.class, args);
        }

        @Override
        public void run(String... args) {
                seedData();
                runExerciseExamples();
        }

        private void seedData() {

                Department engineering = departmentService.create(
                                Department.builder()
                                                .name("Engineering")
                                                .build());

                Department hr = departmentService.create(
                                Department.builder()
                                                .name("HR")
                                                .build());

                Department finance = departmentService.create(
                                Department.builder()
                                                .name("Finance")
                                                .build());

                employeeService.create(
                                Employee.builder()
                                                .name("Rajkaran Yadav")
                                                .email("rajkaran@example.com")
                                                .salary(75000.0)
                                                .permanent(true)
                                                .department(engineering)
                                                .build());

                employeeService.create(
                                Employee.builder()
                                                .name("Aman Sharma")
                                                .email("aman@example.com")
                                                .salary(52000.0)
                                                .permanent(true)
                                                .department(engineering)
                                                .build());

                employeeService.create(
                                Employee.builder()
                                                .name("Priya Verma")
                                                .email("priya@example.com")
                                                .salary(64000.0)
                                                .permanent(false)
                                                .department(hr)
                                                .build());

                employeeService.create(
                                Employee.builder()
                                                .name("Neha Singh")
                                                .email("neha@example.com")
                                                .salary(83000.0)
                                                .permanent(true)
                                                .department(finance)
                                                .build());
        }

        private void runExerciseExamples() {
                log.info("Employees by department: {}", employeeService.findByDepartmentName("Engineering"));
                log.info("Employees containing name: {}", employeeService.findByNameContaining("a"));
                log.info("Custom query employees: {}", employeeService.searchByNameOrEmail("rish"));
                log.info("Named query employees: {}", employeeService.findPermanentEmployees());
                log.info("Sorted employees: {}", employeeService.findAll(Sort.by("name")));
                log.info("Paged employees: {}", employeeService
                                .findAll(PageRequest.of(0, 2, Sort.by("salary").descending())).getContent());
                log.info("Interface projection: {}", employeeService.findEmployeeViews());
                log.info("Class projection: {}", employeeService.findEmployeeSummaries());
                log.info("Average salary: {}", employeeService.findAverageSalary());
                employeeService.saveAll(List.of(
                                new Employee(null, "Bulk One", "bulk1@example.com", 41000.0, true,
                                                departmentService.get(1L), null, null, null, null),
                                new Employee(null, "Bulk Two", "bulk2@example.com", 43000.0, false,
                                                departmentService.get(2L), null, null, null, null)));
        }
}

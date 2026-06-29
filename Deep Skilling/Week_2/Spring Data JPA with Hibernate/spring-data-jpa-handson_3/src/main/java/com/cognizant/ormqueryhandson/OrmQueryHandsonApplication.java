package com.cognizant.ormqueryhandson;

import com.cognizant.ormqueryhandson.model.Attempt;
import com.cognizant.ormqueryhandson.model.AttemptOption;
import com.cognizant.ormqueryhandson.model.AttemptQuestion;
import com.cognizant.ormqueryhandson.model.Employee;
import com.cognizant.ormqueryhandson.service.AttemptService;
import com.cognizant.ormqueryhandson.service.EmployeeService;
import java.util.Comparator;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// main app entry point
@SpringBootApplication
// main app entry point
public class OrmQueryHandsonApplication implements CommandLineRunner {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmQueryHandsonApplication.class);
    private final EmployeeService employeeService;
    private final AttemptService attemptService;

    public OrmQueryHandsonApplication(EmployeeService employeeService, AttemptService attemptService) {
        this.employeeService = employeeService;
        this.attemptService = attemptService;
    }

    public static void main(String[] args) {
        SpringApplication.run(OrmQueryHandsonApplication.class, args);
    }

    @Override
    public void run(String... args) {
        testGetAllPermanentEmployees();
        testGetAverageSalary();
        testGetAverageSalaryByDepartment();
        testGetAllEmployeesNative();
        testGetAttemptDetails();
        testCriteriaQuery();
    }

    private void testGetAllPermanentEmployees() {
        section("Hands on 2 - Get all permanent employees using HQL fetch join");
        List<Employee> employees = employeeService.getAllPermanentEmployees();
        LOGGER.debug("Permanent Employees: {}", employees);
        employees.forEach(employee -> LOGGER.debug("Employee: {} Skills: {}", employee, employee.getSkillList()));
    }

    private void testGetAverageSalary() {
        section("Hands on 4 - Get average salary using HQL");
        LOGGER.debug("Average Salary: {}", employeeService.getAverageSalary());
    }

    private void testGetAverageSalaryByDepartment() {
        section("Hands on 4 - Get average salary by department using HQL parameter");
        LOGGER.debug("Average Salary for Department 1: {}", employeeService.getAverageSalary(1));
    }

    private void testGetAllEmployeesNative() {
        section("Hands on 5 - Get all employees using Native Query");
        employeeService.getAllEmployeesNative().forEach(employee -> LOGGER.debug("Employee Native: {}", employee));
    }

    private void testGetAttemptDetails() {
        section("Hands on 3 - Fetch quiz attempt details using HQL");
        Attempt attempt = attemptService.getAttempt(1, 1);
        LOGGER.debug("Username: {}", attempt.getUser().getName());
        LOGGER.debug("Attempted Date: {}", attempt.getDate());
        LOGGER.debug("Total Score: {}", attempt.getScore());
        attempt.getAttemptQuestionList().stream().sorted(Comparator.comparing(AttemptQuestion::getId)).forEach(attemptQuestion -> {
            LOGGER.debug("{}", attemptQuestion.getQuestion().getText());
            List<AttemptOption> options = attemptQuestion.getAttemptOptionList().stream().sorted(Comparator.comparing(attemptOption -> attemptOption.getOption().getId())).toList();
            for (int i = 0; i < options.size(); i++) {
                AttemptOption attemptOption = options.get(i);
                LOGGER.debug("{}) {} {} {}", i + 1, attemptOption.getOption().getText(), attemptOption.getOption().getScore(), attemptOption.getSelected());
            }
        });
    }

    private void testCriteriaQuery() {
        section("Hands on 6 - Criteria Query dynamic filter");
        employeeService.searchEmployees("a", true, null, 50000.0).forEach(employee -> LOGGER.debug("Criteria Employee: {}", employee));
    }

    private void section(String title) {
        LOGGER.info("\n============================================================");
        LOGGER.info(title);
        LOGGER.info("============================================================");
    }
}


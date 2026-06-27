package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.model.Stock;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.repository.StockRepository;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private final CountryRepository countryRepository;
    private final StockRepository stockRepository;
    private final EmployeeService employeeService;
    private final DepartmentService departmentService;
    private final SkillService skillService;

    public OrmLearnApplication(CountryRepository countryRepository, StockRepository stockRepository,
            EmployeeService employeeService, DepartmentService departmentService, SkillService skillService) {
        this.countryRepository = countryRepository;
        this.stockRepository = stockRepository;
        this.employeeService = employeeService;
        this.departmentService = departmentService;
        this.skillService = skillService;
    }

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {
        testCountryQueries();
        testStockQueries();
        testGetEmployee();
        testAddEmployee();
        testUpdateEmployee();
        testGetDepartment();
        testAddSkillToEmployee();
    }

    private void testCountryQueries() {
        section("Hands on 1 - Country Query Methods");
        List<Country> countriesContainingOu = countryRepository.findByNameContainingIgnoreCase("ou");
        countriesContainingOu.forEach(country -> LOGGER.debug("Country containing ou: {}", country));
        List<Country> countriesContainingOuSorted = countryRepository
                .findByNameContainingIgnoreCaseOrderByNameAsc("ou");
        countriesContainingOuSorted.forEach(country -> LOGGER.debug("Sorted country containing ou: {}", country));
        List<Country> countriesStartingZ = countryRepository.findByNameStartingWithIgnoreCase("Z");
        countriesStartingZ.forEach(country -> LOGGER.debug("Country starting Z: {}", country));
    }

    private void testStockQueries() {
        section("Hands on 2 - Stock Query Methods");
        List<Stock> facebookSeptemberStocks = stockRepository.findByCodeAndDateBetween("FB", LocalDate.of(2019, 9, 1),
                LocalDate.of(2019, 9, 30));
        facebookSeptemberStocks.forEach(stock -> LOGGER.debug("FB September 2019: {}", stock));
        List<Stock> googleGreaterThan1250 = stockRepository.findByCodeAndCloseGreaterThan("GOOGL",
                new BigDecimal("1250"));
        googleGreaterThan1250.forEach(stock -> LOGGER.debug("GOOGL close greater than 1250: {}", stock));
        List<Stock> topVolumeStocks = stockRepository.findTop3ByOrderByVolumeDesc();
        topVolumeStocks.forEach(stock -> LOGGER.debug("Top volume stock: {}", stock));
        List<Stock> netflixLowestStocks = stockRepository.findTop3ByCodeOrderByCloseAsc("NFLX");
        netflixLowestStocks.forEach(stock -> LOGGER.debug("Netflix lowest stock: {}", stock));
    }

    private void testGetEmployee() {
        section("Hands on 4 and 6 - Get Employee with Department and Skills");
        Employee employee = employeeService.get(1);
        LOGGER.debug("Employee:{}", employee);
        LOGGER.debug("Department:{}", employee.getDepartment());
        LOGGER.debug("Skills:{}", employee.getSkillList());
    }

    private void testAddEmployee() {
        section("Hands on 4 - Add Employee");
        Employee employee = new Employee();
        employee.setName("Rajkaran Yadav");
        employee.setSalary(50000.0);
        employee.setPermanent(true);
        employee.setDateOfBirth(LocalDate.of(2004, 7, 14));
        Department department = departmentService.get(1);
        employee.setDepartment(department);
        employeeService.save(employee);
        LOGGER.debug("Added Employee:{}", employee);
    }

    private void testUpdateEmployee() {
        section("Hands on 4 - Update Employee Department");
        Employee employee = employeeService.get(2);
        Department department = departmentService.get(2);
        employee.setDepartment(department);
        employeeService.save(employee);
        LOGGER.debug("Updated Employee:{}", employee);
    }

    private void testGetDepartment() {
        section("Hands on 5 - Get Department with Employees");
        Department department = departmentService.get(1);
        LOGGER.debug("Department:{}", department);
        LOGGER.debug("Employees:{}", department.getEmployeeList());
    }

    private void testAddSkillToEmployee() {
        section("Hands on 6 - Add Skill to Employee");
        Employee employee = employeeService.get(3);
        Skill skill = skillService.get(3);
        employee.getSkillList().add(skill);
        employeeService.save(employee);
        LOGGER.debug("Employee after skill added:{}", employee);
        LOGGER.debug("Skills:{}", employee.getSkillList());
    }

    private void section(String title) {
        LOGGER.info("================================================================");
        LOGGER.info(title);
        LOGGER.info("================================================================");
    }
}

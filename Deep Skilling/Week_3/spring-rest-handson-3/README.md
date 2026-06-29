# Spring REST Hands-on 3

**Completed by:** Rajkaran

**Application name:** `spring-rest-handson-3`

**Package name:** `springlearn`

---

# Objective

This project demonstrates integration of RESTful Web Services of type GET and testing the services using Postman. It follows the Controller → Service → DAO architecture.

---

# Hands-on 3 Implementation

## 1. Static Employee List Using Spring XML

I created `employee.xml` inside `src/main/resources`.

The XML contains:

* Departments
* Skills
* Four Employee objects
* `employeeList` as `ArrayList<Employee>`
* `departmentList` as `ArrayList<Department>`

---

## 2. Employee DAO

I created `EmployeeDao`.

It contains:

* Static variable `EMPLOYEE_LIST`
* Constructor to load `employeeList` from XML configuration
* `getAllEmployees()` method to return the employee list

---

## 3. Employee Service

I created `EmployeeService`.

It contains:

* `@Service`
* Lombok `@RequiredArgsConstructor`
* Lombok `@Slf4j`
* `getAllEmployees()` method
* `@Transactional(readOnly = true)`

---

## 4. Employee REST Controller

I created `EmployeeController`.

### Endpoint

```http
GET /employees
```

### Sample URL

```text
http://localhost:8083/employees
```

### Sample Response

```json
[
  {
    "id": 1,
    "name": "Rajkaran",
    "salary": 75000.0,
    "permanent": true,
    "department": {
      "id": 1,
      "name": "Engineering"
    },
    "skillList": [
      {
        "id": 1,
        "name": "Java"
      },
      {
        "id": 2,
        "name": "Spring Boot"
      }
    ]
  }
]
```

### Postman Output

*Screenshot demonstrating the successful execution and response of this endpoint.*

![Employees API](../postman_output/employees_get_all.png)

---

## 5. Department REST Service

I created:

* `DepartmentDao`
* `DepartmentService`
* `DepartmentController`

### Endpoint

```http
GET /departments
```

### Sample URL

```text
http://localhost:8083/departments
```

### Sample Response

```json
[
  {
    "id": 1,
    "name": "Engineering"
  },
  {
    "id": 2,
    "name": "Human Resources"
  },
  {
    "id": 3,
    "name": "Finance"
  }
]
```

### Postman Output

*Screenshot demonstrating the successful execution and response of this endpoint.*

![Departments API](../postman_output/departments_get_all.png)

---

## 6. Builder Pattern Usage

The model classes use Lombok `@Builder`.

Classes using the Builder pattern:

* Employee
* Department
* Skill

---

## 7. Logging

All major layers use Lombok SLF4J logger.

```java
@Slf4j
```

Logging has been added in:

* Main application
* Controller layer
* Service layer
* DAO layer

---

## 8. Run the Application

```bash
mvn spring-boot:run
```

Or run the following class in IntelliJ IDEA:

```text
SpringRestHandson3Application
```

---

## 9. Test Using Postman

### Get All Employees

```text
GET http://localhost:8083/employees
```

**Postman Output**

![Employees API](../postman_output/employees_get_all.png)

---

### Get All Departments

```text
GET http://localhost:8083/departments
```

**Postman Output**

![Departments API](../postman_output/departments_get_all.png)

---

## 10. Run Tests

```bash
mvn test
```

MockMvc tests are included for:

* Application context loading
* `/employees`
* `/departments`


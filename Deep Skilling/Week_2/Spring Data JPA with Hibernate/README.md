# Spring Data JPA with Hibernate

**Module:** Employee Management System & ORM Hands-on  
**Package Name:** `com.cognizant.employeemanagementsystem`

This module dives deep into Object-Relational Mapping (ORM) using Spring Data JPA and Hibernate. It features three isolated hands-on exercises and a capstone Employee Management System API.

---

## Included Projects

### 1. `orm-learn` (Hands-on 1)
- Focuses on basic entity mapping for `Country`, `Employee`, `Department`, `Skill`, and `Stock`.
- Demonstrates custom Exception Handling (e.g., `CountryNotFoundException`).

**Output Logs (Exercises 1-10):**
![Exercise 1](images/exercise_1_output.png)
![Exercise 2](images/exercise_2_output.png)
![Exercise 3](images/exercise_3_output.png)
![Exercise 4](images/exercise_4_output.png)
![Exercise 5](images/exercise_5_output.png)
![Exercise 6](images/exercise_6_output.png)
![Exercise 7](images/exercise_7_output.png)
![Exercise 8](images/exercise_8_output.png)
![Exercise 9](images/exercise_9_output.png)
![Exercise 10](images/exercise_10_output.png)
![Exercise 10.1](images/exercise_10_1output.png)

### 2. `spring-data-jpa-handson_2`
- Introduces the Service layer pattern.
- Implements `EmployeeService`, `DepartmentService`, and `SkillService` for structured business logic over basic repository calls.

**Output Logs:**
![Exercise 12](images/_12_output.png)

### 3. `spring-data-jpa-handson_3`
- Explores complex relationships (One-to-Many, Many-to-Many) via a Quiz system (`Attempt`, `Question`, `User`).
- Demonstrates advanced JPQL queries and projections.

**Output Logs:**
![Exercise 13](images/_13_output.png)

### 4. `EmployeeManagementSystem` (Capstone)
A complete, enterprise-ready REST API consolidating all ORM learnings.
- **DTO Pattern:** Utilizes `EmployeeRequest` and `EmployeeSummary` to decouple the database entity from the JSON payloads.
- **Auditing:** Features `AuditConfig` for automated timestamping.
- **Custom Queries:** Uses JPQL, native queries, and interface-based projections.

---

## API Documentation & Database Proof

To verify the robust implementation of the Employee Management System, an embedded H2 database is utilized alongside Swagger UI for seamless API testing.

### Swagger UI API Documentation
*Testing the full suite of CRUD operations seamlessly through the auto-generated OpenAPI spec.*

![Swagger UI 1](images/swagger_ui_dashboard.png)  
![Swagger UI 2](images/swagger_ui_endpoints.png)

### H2 Database Console
*Proof of successful ORM mappings, table generation, and data persistence in memory.*

*Login Screen:*  
![H2 Console Login](images/h2_console_login.png)

*Connected & Exploring Schema:*  
![H2 Console Connected](images/h2_console_connected.png)

*Successful Query Execution:*  
![H2 Console Query Results](images/h2_console_query_results.png)

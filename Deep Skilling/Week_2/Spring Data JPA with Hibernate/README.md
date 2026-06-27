# 🗄️ Spring Data JPA with Hibernate

**Module:** Employee Management System & ORM Hands-on  
**Package Name:** `com.cognizant.employeemanagementsystem`

This module dives deep into Object-Relational Mapping (ORM) using Spring Data JPA and Hibernate. It features three isolated hands-on exercises and a capstone Employee Management System API.

---

## 🛠️ Included Projects

### 1. `orm-learn` (Hands-on 1)
- Focuses on basic entity mapping for `Country`, `Employee`, `Department`, `Skill`, and `Stock`.
- Demonstrates custom Exception Handling (e.g., `CountryNotFoundException`).

### 2. `spring-data-jpa-handson_2`
- Introduces the Service layer pattern.
- Implements `EmployeeService`, `DepartmentService`, and `SkillService` for structured business logic over basic repository calls.

### 3. `spring-data-jpa-handson_3`
- Explores complex relationships (One-to-Many, Many-to-Many) via a Quiz system (`Attempt`, `Question`, `User`).
- Demonstrates advanced JPQL queries and projections.

### 4. 🌟 `EmployeeManagementSystem` (Capstone)
A complete, enterprise-ready REST API consolidating all ORM learnings.
- **DTO Pattern:** Utilizes `EmployeeRequest` and `EmployeeSummary` to decouple the database entity from the JSON payloads.
- **Auditing:** Features `AuditConfig` for automated timestamping.
- **Custom Queries:** Uses JPQL, native queries, and interface-based projections.

---

## 📸 API Documentation & Database Proof

To verify the robust implementation of the Employee Management System, an embedded H2 database is utilized alongside Swagger UI for seamless API testing.

### Swagger UI API Documentation
*Testing the full suite of CRUD operations seamlessly through the auto-generated OpenAPI spec.*

![Swagger UI 1](../images/Swagger%20UI%20-%20Google%20Chrome%2024-06-2026%2019_43_35.png)  
![Swagger UI 2](../images/Swagger%20UI%20-%20Google%20Chrome%2024-06-2026%2019_43_55.png)

### H2 Database Console
*Proof of successful ORM mappings, table generation, and data persistence in memory.*

*Login Screen:*  
![H2 Console Login](../images/H2%20Console%20-%20Google%20Chrome%2024-06-2026%2002_46_14.png)

*Connected & Exploring Schema:*  
![H2 Console Connected](../images/H2%20Console%20-%20Google%20Chrome%2024-06-2026%2002_49_36.png)

*Successful Query Execution:*  
![H2 Console Query Results](../images/H2%20Console%20-%20Google%20Chrome%2024-06-2026%2002_51_00.png)

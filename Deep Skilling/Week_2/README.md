# Week 2: Spring Framework & Spring Boot

This directory contains the solutions for the Week 2 Deep Skilling exercises, which focus on learning the Spring Framework. The exercises have been professionally separated into two distinct Maven projects to cleanly decouple classic Spring Core configurations from modern Spring Boot conventions.

## Project Structure

- **`LibraryManagement_SpringCore/`** (Exercises 1-8): Focuses on classic Spring Framework features including XML Configuration, Annotation-based Component Scanning, Dependency Injection (Constructor & Setter), and Spring AOP (Aspect-Oriented Programming).
- **`LibraryManagement_SpringBoot/`** (Exercise 9): A modern Spring Boot application featuring a RESTful API, Spring Data JPA, and an embedded H2 database.

---

## 1. Spring Core Application (Exercises 1-8)

### Features Implemented
- **Dependency Injection:** `@Service` and `@Repository` auto-wiring.
- **XML Configuration:** Explicit `<bean>` definitions for constructor and setter injection.
- **Spring AOP:** A custom `LoggingAspect` intercepting method calls with `@Before`, `@After`, and `@Around` advice to log execution times.

### How to Run
Navigate into the `LibraryManagement_SpringCore` directory and run the following Maven command:
```bash
mvn clean compile exec:java -Dexec.mainClass="com.library.LibraryManagementApplication"
```

---

## 2. Spring Boot Application (Exercise 9)

### Features Implemented
- **RESTful Endpoints:** Fully functional `BookController` with GET, POST, PUT, and DELETE operations.
- **Spring Data JPA:** `BookRepository` interface for automatic database operations without writing boilerplate SQL.
- **In-Memory Database:** H2 database configured for instant testing with no external dependencies.

### How to Run
Navigate into the `LibraryManagement_SpringBoot` directory and start the server:
```bash
mvn spring-boot:run
```
The server will start on **port 8081** (configured in `application.properties` to avoid conflicts).

### API Documentation
- **GET** `http://localhost:8081/api/books` - Retrieve all books
- **POST** `http://localhost:8081/api/books` - Create a new book
- **PUT** `http://localhost:8081/api/books/{id}` - Update a book
- **DELETE** `http://localhost:8081/api/books/{id}` - Delete a book

---

## Database Configuration & H2 Console

We are using an embedded H2 database for the Spring Boot project. You can inspect the database directly using the H2 web console.

**Login Details:**
- **URL:** `http://localhost:8081/h2-console`
- **JDBC URL:** `jdbc:h2:mem:librarydb`
- **User Name:** `sa`
- **Password:** `password`

### H2 Console Demonstration
Below are screenshots demonstrating the running H2 Console and successful queries against our `books` table:

![H2 Console Login](images/H2%20Console%20-%20Google%20Chrome%2024-06-2026%2002_46_14.png)

![H2 Console Connected](images/H2%20Console%20-%20Google%20Chrome%2024-06-2026%2002_49_36.png)

![H2 Console Query Results](images/H2%20Console%20-%20Google%20Chrome%2024-06-2026%2002_51_00.png)

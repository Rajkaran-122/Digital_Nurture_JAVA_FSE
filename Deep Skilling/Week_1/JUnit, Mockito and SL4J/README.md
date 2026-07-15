# JUnit, Mockito and SL4J

![JUnit5](https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=junit5&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)

This module focuses on Enterprise Testing methodologies and Application Logging. Mastering these frameworks is crucial for writing robust, maintainable, and production-ready code.

---

## Learning Objectives

### 1. Unit Testing with JUnit 5
- Understanding the Test-Driven Development (TDD) lifecycle.
- Writing test cases using `@Test`, `@BeforeEach`, and `@AfterEach` annotations.
- Asserting expected outcomes using `assertEquals`, `assertTrue`, and exception testing via `assertThrows`.

### 2. Mocking with Mockito
- Isolating components by creating mock objects for external dependencies (e.g., database repositories, API clients).
- Using `@Mock`, `@InjectMocks`, and `Mockito.when()` to simulate complex behaviors.
- Verifying method invocations using `Mockito.verify()`.

### 3. Application Logging with SLF4J
- Replacing standard `System.out.println` with professional logging frameworks.
- Understanding logging levels: `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`.
- Configuring `logback.xml` or properties for log formatting and output targeting.

---

## Project Structure

- **`src/main/java/`**: Contains the core business logic components designed to be testable.
- **`src/test/java/`**: Houses the JUnit test suites and Mockito setup validating the core logic.
- **`pom.xml`**: Manages dependencies for JUnit Jupiter, Mockito Core, and SLF4J API.


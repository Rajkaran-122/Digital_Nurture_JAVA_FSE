# Week 4: Microservices & Code Quality

Welcome to the Week 4 exercises of the Cognizant Digital Nurture (Java FSE) program. This directory contains all the microservices architecture, API gateways, load balancers, and static code analysis (SonarQube) projects.

## Topics Covered:
* **Code Quality & SonarQube:** Static code analysis and code coverage
* **Microservices with Spring Boot 3:** Decoupled architecture and inter-service communication
* **Spring Cloud:** Service discovery, API Gateway, and centralized configuration
* **Edge Services:** Client-side load balancing and resilience patterns

---

## Project Portfolio & Architecture Gallery

Below is a comprehensive visual gallery of the architectures and successful execution outputs for all projects built in Week 4.

### 1. Spring Boot Microservices
Demonstrating synchronous and asynchronous inter-service communication, service discovery, and circuit breakers.

**User & Order Service**
![User Order Architecture](1_spring-boot/output/user-order-arch.png)
![User Order Output](1_spring-boot/output/user-order-out.png)

**Inventory Service**
![Inventory Architecture](1_spring-boot/output/inventory-arch.png)
![Inventory Configurations](1_spring-boot/output/inventory-config-out.png)
![Inventory Output](1_spring-boot/output/inventory-out.png)

**API Gateway (Internal)**
![API Gateway Arch](1_spring-boot/output/api-gateway-arch.png)
![API Gateway Output](1_spring-boot/output/api-gateway-out.png)

**Circuit Breaker (Resilience4j)**
![Circuit Breaker Arch](1_spring-boot/output/circuit-breaker-arch.png)
![Circuit Breaker Output](1_spring-boot/output/circuit-breaker-out.png)

---

### 2. Microservices with API Gateway
A complete distributed system utilizing Netflix Eureka and Spring Cloud Gateway.

**Core Services**
![Account Service](2_api-gateway/outputs/account-service-out.png)
![Loan Service](2_api-gateway/outputs/loan-service-out.png)
![Greet Service](2_api-gateway/outputs/greet-service-out.png)

**Eureka Service Discovery**
![Eureka Arch](2_api-gateway/outputs/eureka-arch.png)
![Eureka Register Arch](2_api-gateway/outputs/eureka-register-arch.png)
![Eureka Output](2_api-gateway/outputs/eureka-out.png)
![Eureka Register Output](2_api-gateway/outputs/eureka-register-out.png)

**Global API Gateway & Logging**
![Global API Gateway Arch](2_api-gateway/outputs/api-gateway-arch.png)
![Global API Gateway Output](2_api-gateway/outputs/api-gateway-out.png)
![Global Logging Arch](2_api-gateway/outputs/global-logging-arch.png)
![Global Logging Output](2_api-gateway/outputs/global-logging-out.png)

---

### 3. Load Balancing & Edge Services
Demonstrating load balancing and routing through Edge Services.

**Routing & Filtering**
![Routing Output](0_sample_loadbalancer/outputs/lb-routing-out.png)

**Load Balancing**
![Load Balancing Output](0_sample_loadbalancer/outputs/lb-balancing-out.png)

**Resilience Patterns**
![Resilience Output](0_sample_loadbalancer/outputs/lb-resilience-out.png)

---

### 4. Centralized Authentication (OAuth2/OIDC)
Securing microservices using Spring Security and OAuth 2.1.

**Authentication Outputs**
![Auth Output 1](0_sample/outputs/auth-sso-out1.png)
![Auth Output 2](0_sample/outputs/auth-sso-out2.png)
![Auth Output 3](0_sample/outputs/auth-sso-out3.png)

---

### 5. SonarQube Code Quality Analysis
Static code analysis, code coverage, and quality gates using SonarQube running locally on Docker.

**SonarQube Setup**
![Docker Running](sonarqube/images/02-docker-running.png)
![Create Project](sonarqube/images/01-create-project.png)

**Initial Code Scan (Failing Quality Gate)**
![Quality Gate Failed](sonarqube/images/03-quality-gate-failed.png)
![Failed Coverage](sonarqube/images/04-quality-gate-failed-coverage.png)
![Bugs Detected](sonarqube/images/06-bugs.png)
![Security Hotspots](sonarqube/images/07-hotspots.png)
![Issues List](sonarqube/images/10-issues-before.png)

**After Issue Resolution (Passing Quality Gate)**
![Maven Success](sonarqube/images/11-maven-success.png)
![Quality Gate Passed](sonarqube/images/12-quality-gate-passed.png)
![Quality Gate Overview Passed](sonarqube/images/13-quality-gate-passed-overview.png)
![Quality Gate Activity](sonarqube/images/14-quality-gate-passed-activity.png)

<div align="center">

# Week 4: Microservices & Code Quality

**Welcome to the Week 4 exercises of the Cognizant Digital Nurture (Java FSE) program!**  
This directory contains all the microservices architecture, API gateways, load balancers, and static code analysis (SonarQube) projects.

</div>

---

## Topics Covered
* **Code Quality & SonarQube:** Static code analysis, code coverage, and quality gates.
* **Microservices with Spring Boot 3:** Decoupled architecture and inter-service communication.
* **Spring Cloud:** Service discovery, API Gateway, and centralized configuration.
* **Edge Services:** Client-side load balancing and resilience patterns.

---

<div align="center">

# Project Portfolio & Architecture Gallery

*Below is a comprehensive visual gallery of the architectures and successful execution outputs for all projects built in Week 4.*

</div>

---

<div align="center">

## 1. Spring Boot Microservices
*Demonstrating synchronous and asynchronous inter-service communication, service discovery, and circuit breakers.*

### User & Order Service
<img src="1_spring-boot/output/user-order-arch.png" width="700" alt="User Order Architecture" />
<br/><br/>
<img src="1_spring-boot/output/user-order-out.png" width="700" alt="User Order Output" />

<br/>

### Inventory Service
<img src="1_spring-boot/output/inventory-arch.png" width="700" alt="Inventory Architecture" />
<br/><br/>
<img src="1_spring-boot/output/inventory-config-out.png" width="700" alt="Inventory Configurations" />
<br/><br/>
<img src="1_spring-boot/output/inventory-out.png" width="700" alt="Inventory Output" />

<br/>

### API Gateway (Internal)
<img src="1_spring-boot/output/api-gateway-arch.png" width="700" alt="API Gateway Architecture" />
<br/><br/>
<img src="1_spring-boot/output/api-gateway-out.png" width="700" alt="API Gateway Output" />

<br/>

### Circuit Breaker (Resilience4j)
<img src="1_spring-boot/output/circuit-breaker-arch.png" width="700" alt="Circuit Breaker Architecture" />
<br/><br/>
<img src="1_spring-boot/output/circuit-breaker-out.png" width="700" alt="Circuit Breaker Output" />

</div>

---

<div align="center">

## 2. Microservices with API Gateway
*A complete distributed system utilizing Netflix Eureka and Spring Cloud Gateway.*

### Core Services
<img src="2_api-gateway/outputs/account-service-arch.png" width="700" alt="Account Service Architecture" />
<br/><br/>
<img src="2_api-gateway/outputs/loan-service-arch.png" width="700" alt="Loan Service Architecture" />
<br/><br/>
<img src="2_api-gateway/outputs/greet-service-arch.png" width="700" alt="Greet Service Architecture" />

<br/>

### Eureka Service Discovery
<img src="2_api-gateway/outputs/eureka-arch.png" width="700" alt="Eureka Architecture" />
<br/><br/>
<img src="2_api-gateway/outputs/eureka-register-arch.png" width="700" alt="Eureka Registry Output" />

<br/>

### Global API Gateway & Logging
<img src="2_api-gateway/outputs/api-gateway-arch.png" width="700" alt="Global API Gateway Architecture" />
<br/><br/>
<img src="2_api-gateway/outputs/global-logging-arch.png" width="700" alt="Global Logging Architecture" />

</div>

---

<div align="center">

## 3. Load Balancing & Edge Services
*Demonstrating load balancing and routing through Edge Services.*

### Routing & Filtering
<img src="0_sample_loadbalancer/outputs/lb-routing-out.png" width="700" alt="Routing Output" />

<br/>

### Load Balancing
<img src="0_sample_loadbalancer/outputs/lb-balancing-out.png" width="700" alt="Load Balancing Output" />

<br/>

### Resilience Patterns
<img src="0_sample_loadbalancer/outputs/lb-resilience-out.png" width="700" alt="Resilience Output" />

</div>

---

<div align="center">

## 4. Centralized Authentication (OAuth2/OIDC)
*Securing microservices using Spring Security and OAuth 2.1.*

### Authentication Outputs
<img src="0_sample/outputs/auth-sso-out1.png" width="700" alt="SSO Output 1" />
<br/><br/>
<img src="0_sample/outputs/auth-sso-out2.png" width="700" alt="SSO Output 2" />
<br/><br/>
<img src="0_sample/outputs/auth-sso-out3.png" width="700" alt="SSO Output 3" />

</div>

---

<div align="center">

## 5. SonarQube Code Quality Analysis
*Static code analysis, code coverage, and quality gates using SonarQube running locally on Docker.*

### SonarQube Setup & Configuration
<img src="sonarqube/images/02-docker-running.png" width="700" alt="Docker Container Running" />
<br/><br/>
<img src="sonarqube/images/01-create-project.png" width="700" alt="Create SonarQube Project" />
<br/><br/>
<img src="sonarqube/notes/images/one.png" width="700" alt="Notes Configuration 1" />
<br/><br/>
<img src="sonarqube/notes/images/two.png" width="700" alt="Notes Configuration 2" />

<br/>

### Initial Code Scan (Failing Quality Gate)
<img src="sonarqube/images/03-quality-gate-failed.png" width="700" alt="Quality Gate Failed" />
<br/><br/>
<img src="sonarqube/images/04-quality-gate-failed-coverage.png" width="700" alt="Failed Coverage" />
<br/><br/>
<img src="sonarqube/images/05-issue-scan.png" width="700" alt="Initial Issue Scan" />
<br/><br/>
<img src="sonarqube/images/06-bugs.png" width="700" alt="Bugs Detected" />
<br/><br/>
<img src="sonarqube/images/07-hotspots.png" width="700" alt="Security Hotspots" />
<br/><br/>
<img src="sonarqube/images/08-metrics-before.png" width="700" alt="Metrics Before Fixing" />
<br/><br/>
<img src="sonarqube/images/09-trend-before.png" width="700" alt="Trend Before Fixing" />
<br/><br/>
<img src="sonarqube/images/10-issues-before.png" width="700" alt="Issues List" />

<br/>

### After Issue Resolution (Passing Quality Gate)
<img src="sonarqube/images/11-maven-success.png" width="700" alt="Maven Build Success" />
<br/><br/>
<img src="sonarqube/images/12-quality-gate-passed.png" width="700" alt="Quality Gate Passed" />
<br/><br/>
<img src="sonarqube/images/13-quality-gate-passed-overview.png" width="700" alt="Quality Gate Overview Passed" />
<br/><br/>
<img src="sonarqube/images/14-quality-gate-passed-activity.png" width="700" alt="Quality Gate Activity" />

</div>

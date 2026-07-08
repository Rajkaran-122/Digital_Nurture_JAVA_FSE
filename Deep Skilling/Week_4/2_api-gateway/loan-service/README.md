# Loan Service

Base package: `com.cognizant.loan`

## Purpose

Implements the PDF microservice exercise endpoint for `loan` and registers with Eureka Discovery Server.

## Port

`8081`

## Run

```bash
mvn clean package
mvn spring-boot:run
```

## Main API

```text
GET http://localhost:8081/loans/{number}
```

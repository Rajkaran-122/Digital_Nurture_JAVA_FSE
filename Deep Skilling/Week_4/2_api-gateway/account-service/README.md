# Account Service

Base package: `com.cognizant.account`

## Purpose

Implements the microservice exercise endpoint for `account` and registers with Eureka Discovery Server.

## Port

`8080`

## Run

```bash
mvn clean package
mvn spring-boot:run
```

## Main API

```text
GET http://localhost:8080/accounts/{number}
```

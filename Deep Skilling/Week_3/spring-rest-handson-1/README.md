# Spring Learn Handson 1

Completed by Rajkaran.

This Spring Boot 3 application contains all hands-on-1 exercises from the Spring REST hands-on document - 1.

## Project Details
```text
Group Id: com.cognizant
Artifact Id: spring-rest-handson-1
Main Class: com.cognizant.com.cognizant.springlearn.SpringLearnApplication
```

## Hands-on Covered

### Hands on 1: Create Spring Web Project using Maven

Created a Spring Boot Maven project with Spring Web and DevTools. The main method uses `SpringApplication.run()` to start the embedded Tomcat server.

### Hands on 2: Load SimpleDateFormat from Spring Configuration XML

Created `date-format.xml` in `src/main/resources` and configured a `SimpleDateFormat` bean with pattern `dd/MM/yyyy`. The application reads this bean using `ClassPathXmlApplicationContext` and parses `31/12/2018`.

### Hands on 3: Incorporate Logging

Configured logging in `application.properties` and used Lombok `@Slf4j` for logging. All methods use start, debug, and end logs.

### Hands on 4: Load Country from Spring Configuration XML

Created `country.xml` and configured a `Country` bean with code and name. The application reads the bean from Spring XML and logs the country details.

### Hands on 5: Demonstrate Singleton and Prototype Scope

The `country` bean is configured with `scope="prototype"`. Two bean references are fetched from the same context to demonstrate that prototype scope creates separate objects.

### Hands on 6: Load List of Countries from Spring Configuration XML

Configured four country beans in `country.xml` and created a `countryList` bean using `<list>` and `<ref>`. The application loads and logs all countries.

## Builder Pattern Usage

The `Country` class uses Lombok `@Builder`. Objects are created using builder syntax in the REST controller and application class.

Example:

```java
Country.builder().code("IN").name("India").build();
```

## REST Endpoints

Run the application and use these endpoints:

```text
GET http://localhost:8080/api/country
GET http://localhost:8080/api/countries
```




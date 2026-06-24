package com.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibraryManagementSpringBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(LibraryManagementSpringBootApplication.class, args);
        System.out.println("==================================================");
        System.out.println("Library Management Spring Boot App Started");
        System.out.println("H2 Console: http://localhost:8080/h2-console");
        System.out.println("REST API:   http://localhost:8080/api/books");
        System.out.println("==================================================");
    }
}

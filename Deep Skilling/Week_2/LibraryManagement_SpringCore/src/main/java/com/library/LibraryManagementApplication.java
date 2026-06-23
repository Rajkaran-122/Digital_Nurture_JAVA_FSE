package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("Initializing Spring Application Context");
        System.out.println("==================================================");
        
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("\n--- Testing Annotation-based Injection (@Service, @Repository) ---");
        BookService annotationService = (BookService) context.getBean("bookService");
        annotationService.manageBooks();

        System.out.println("\n--- Testing XML Setter Injection ---");
        BookService xmlSetterService = (BookService) context.getBean("xmlBookServiceSetter");
        xmlSetterService.manageBooks();

        System.out.println("\n--- Testing XML Constructor Injection ---");
        BookService xmlConstructorService = (BookService) context.getBean("xmlBookServiceConstructor");
        xmlConstructorService.manageBooks();
        
        System.out.println("\n==================================================");
        System.out.println("Application Finished Successfully.");
        System.out.println("==================================================");
    }
}

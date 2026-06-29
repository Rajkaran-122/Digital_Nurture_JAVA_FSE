package com.cognizant.librarymanagementsystem;

import com.cognizant.librarymanagementsystem.model.Book;
import com.cognizant.librarymanagementsystem.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

/**
 * LibraryManagementApplication — Main entry point.

 *  Exercise 1 : Load Spring context from applicationContext.xml
 *  Exercise 2 : Verify setter-injected BookService works
 *  Exercise 3 : AOP logging intercepts every service method call
 *  Exercise 4 : Maven project properly compiles with all dependencies
 *  Exercise 5 : IoC container wires all beans; context loaded here
 *  Exercise 6 : Annotation (@Service, @Repository) bean also retrieved
 *  Exercise 7 : Constructor-injected BookService verified separately
 */
// main app entry point
public class LibraryManagementApplication {

    private static final Logger logger = LoggerFactory.getLogger(LibraryManagementApplication.class);

    public static void main(String[] args) {

        logger.info("Loading Spring ApplicationContext from applicationContext.xml ");
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        logger.info("Spring ApplicationContext loaded successfully.\n");


        section("Exercise 2 & 5 — Setter Injection (XML wiring)");
        BookService setterService = (BookService) context.getBean("bookServiceSetter");
        runDemoOperations(setterService, "SETTER-INJECTED BookService");

        section("Exercise 6 — Annotation-based Configuration (@Service / @Repository)");
        BookService annotationService = (BookService) context.getBean("annotationBookService");
        logger.info("Annotation-based BookService bean retrieved: {}", annotationService);
        List<Book> annotationBooks = annotationService.getAllBooks();
        logger.info("Books via annotation-scanned service:");
        annotationBooks.forEach(b -> logger.info("   -> {}", b));

        section("Exercise 7 — Constructor Injection (XML <constructor-arg>)");
        BookService constructorService = (BookService) context.getBean("bookServiceConstructor");
        runDemoOperations(constructorService, "CONSTRUCTOR-INJECTED BookService");

        section("Exercise 3 — AOP Logging (observe timestamps above each method)");
        Book newBook = new Book("B999", "Domain-Driven Design", "Eric Evans");
        logger.info("Adding a new book to trigger AOP advice ...");
        setterService.addBook(newBook);

        logger.info("Fetching the newly added book ...");
        Book fetched = setterService.getBook("B999");
        logger.info("Fetched: {}", fetched);

        logger.info("Removing the book ...");
        setterService.removeBook("B999");
        logger.info("Book removed. Final book count: {}", setterService.getAllBooks().size());

        context.close();
        logger.info("Application finished. Spring context closed.");
    }

    private static void runDemoOperations(BookService service, String label) {
        List<Book> books = service.getAllBooks();
        logger.info("All books ({}):", books.size());
        books.forEach(b -> logger.info("   {}", b));

        Book book = service.getBook("B001");
        logger.info("getBook('B001') => {}", book);

        Book newBook = new Book("B100", "Refactoring", "Martin Fowler");
        service.addBook(newBook);
        logger.info("After add, total books: {}", service.getAllBooks().size());
    }
    private static void section(String title) {
        logger.info("\n");
        logger.info("================================================================");
        logger.info("  {}", title);
        logger.info("================================================================");
    }

}


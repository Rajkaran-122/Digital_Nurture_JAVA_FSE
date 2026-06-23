package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("bookService")
public class BookService {

    private BookRepository bookRepository;

    // Default constructor
    public BookService() {
        System.out.println("BookService: Default constructor initialized.");
    }

    // Constructor Injection (Exercise 7)
    @Autowired
    public BookService(@org.springframework.beans.factory.annotation.Qualifier("bookRepository") BookRepository bookRepository) {
        System.out.println("BookService: Constructor Injection triggered.");
        this.bookRepository = bookRepository;
    }

    // Setter Injection (Exercises 2, 5, 7)
    // @Autowired is commented out here because we used it on the constructor, 
    // but the XML config explicitly calls this method.
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("BookService: Setter Injection triggered.");
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("BookService: Managing books...");
        if (bookRepository != null) {
            bookRepository.fetchBooks();
        } else {
            System.out.println("BookService: Repository is null! Injection failed.");
        }
    }
}

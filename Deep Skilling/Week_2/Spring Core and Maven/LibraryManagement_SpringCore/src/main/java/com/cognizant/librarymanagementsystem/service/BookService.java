package com.cognizant.librarymanagementsystem.service;

import com.cognizant.librarymanagementsystem.model.Book;
import com.cognizant.librarymanagementsystem.repository.BookRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;


@Service("annotationBookService")
@Scope(value = "prototype")
public class BookService {

    private static final Logger logger = LoggerFactory.getLogger(BookService.class);

    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        logger.info("[BookService] Constructor Injection — BookRepository injected via constructor");
        this.bookRepository = bookRepository;
    }

    public BookService() {
        logger.info("[BookService] No-arg constructor called (setter injection path)");
    }


    @Autowired
    public void setBookRepository(BookRepository bookRepository) {
        logger.info("[BookService] Setter Injection — BookRepository injected via setter");
        this.bookRepository = bookRepository;
    }


    public void addBook(Book book) {
        logger.info("[BookService] addBook() called for: {}", book.getTitle());
        bookRepository.save(book);
        logger.info("[BookService] Book added successfully.");
    }

    public Book getBook(String id) {
        logger.info("[BookService] getBook() called for id: {}", id);
        Book book = bookRepository.findById(id);
        if (book == null) {
            logger.warn("[BookService] No book found with id: {}", id);
        }
        return book;
    }

    public List<Book> getAllBooks() {
        logger.info("[BookService] getAllBooks() called");
        return bookRepository.findAll();
    }

    public void removeBook(String id) {
        logger.info("[BookService] removeBook() called for id: {}", id);
        bookRepository.delete(id);
        logger.info("[BookService] Book removed successfully.");
    }
}

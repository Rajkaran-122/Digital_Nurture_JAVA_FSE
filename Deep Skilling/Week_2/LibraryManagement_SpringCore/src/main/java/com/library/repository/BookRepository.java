package com.library.repository;

import org.springframework.stereotype.Repository;

@Repository("bookRepository")
public class BookRepository {

    public void fetchBooks() {
        System.out.println("BookRepository: Fetching books from the database...");
        // Simulating database delay
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

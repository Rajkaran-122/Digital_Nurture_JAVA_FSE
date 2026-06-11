package dsa.exercise6;

import java.util.Arrays;

public class LibraryManagement {

    public static Book linearSearchByTitle(Book[] books, String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                return book;
            }
        }
        return null;
    }

    public static Book binarySearchByTitle(Book[] books, String title) {
        int left = 0;
        int right = books.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = books[mid].getTitle().compareToIgnoreCase(title);

            if (comparison == 0) {
                return books[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Book[] books = {
            new Book("B01", "The Great Gatsby", "F. Scott Fitzgerald"),
            new Book("B02", "1984", "George Orwell"),
            new Book("B03", "To Kill a Mockingbird", "Harper Lee"),
            new Book("B04", "Moby Dick", "Herman Melville")
        };

        System.out.println("Linear Search for 1984: " + linearSearchByTitle(books, "1984"));

        Arrays.sort(books);
        System.out.println("Binary Search for Moby Dick: " + binarySearchByTitle(books, "Moby Dick"));
    }
}

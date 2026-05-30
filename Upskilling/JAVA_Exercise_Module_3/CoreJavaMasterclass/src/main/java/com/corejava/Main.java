package com.corejava;

import com.corejava.basics.BasicsDemo;
import com.corejava.methods.MethodsDemo;
import com.corejava.arrays.ArraysDemo;
import com.corejava.oop.OOPDemo;
import com.corejava.exceptions.ExceptionsDemo;
import com.corejava.io.IODemo;
import com.corejava.collections.CollectionsDemo;
import com.corejava.advanced.AdvancedDemo;
import com.corejava.concurrency.VirtualThreadsDemo;
import com.corejava.network.TCPServerDemo;
import com.corejava.jdbc.TransactionDemo;

import java.util.Scanner;

public class Main {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("   Core Java Module Execution Utility");
        System.out.println("==================================================");
        
        while (true) {
            System.out.println("\nSelect a Module to execute:");
            System.out.println("1. Basics (Ex 1-11)");
            System.out.println("2. Methods & Recursion (Ex 12-13)");
            System.out.println("3. Arrays & Strings (Ex 14-16)");
            System.out.println("4. OOP Principles (Ex 17-19)");
            System.out.println("5. Exceptions (Ex 20-21)");
            System.out.println("6. File I/O (Ex 22-23)");
            System.out.println("7. Collections (Ex 24-25)");
            System.out.println("8. Advanced (Java 21 Streams, Records, Lambdas) (Ex 27-30)");
            System.out.println("9. Virtual Threads (Java 21 Scalability Test) (Ex 40-41)");
            System.out.println("10. TCP Socket Server (Chat Application) (Ex 35)");
            System.out.println("11. JDBC Transactions (Money Transfer) (Ex 31-33)");
            System.out.println("0. Exit");
            System.out.print("Enter choice: ");
            
            String choice = scanner.nextLine();
            
            switch (choice) {
                case "1" -> BasicsDemo.execute();
                case "2" -> MethodsDemo.execute();
                case "3" -> ArraysDemo.execute();
                case "4" -> OOPDemo.execute();
                case "5" -> ExceptionsDemo.execute();
                case "6" -> IODemo.execute();
                case "7" -> CollectionsDemo.execute();
                case "8" -> AdvancedDemo.execute();
                case "9" -> VirtualThreadsDemo.execute();
                case "10" -> TCPServerDemo.startServer(8080);
                case "11" -> TransactionDemo.executeTransaction();
                case "0" -> { System.out.println("Shutting down gracefully..."); System.exit(0); }
                default -> System.out.println("Invalid selection. Please try again.");
            }
        }
    }
}

package com.corejava;

import com.corejava.concurrency.VirtualThreadsDemo;
import com.corejava.network.TCPServerDemo;
import com.corejava.jdbc.TransactionDemo;

import java.util.Scanner;

/**
 * Enterprise Core Java Masterclass - Central CLI Menu
 * Architecture: Facade Pattern acting as an entry point for 41 exercises.
 * 
 * @author Senior Java Architect
 * @version 1.0
 */
public class Main {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("   Enterprise Core Java Masterclass Simulator");
        System.out.println("==================================================");
        
        while (true) {
            System.out.println("\nSelect an Advanced Exercise Module to execute:");
            System.out.println("1. [Ex 40] Virtual Threads (Java 21 Scalability Test)");
            System.out.println("2. [Ex 35] TCP Socket Server (Chat Application)");
            System.out.println("3. [Ex 33] JDBC Transactions (Money Transfer System)");
            System.out.println("0. Exit");
            System.out.print("Enter choice: ");
            
            String choice = scanner.nextLine();
            
            switch (choice) {
                case "1" -> runVirtualThreadsDemo();
                case "2" -> runTCPServerDemo();
                case "3" -> runJdbcTransactionDemo();
                case "0" -> {
                    System.out.println("Shutting down gracefully...");
                    System.exit(0);
                }
                default -> System.out.println("Invalid selection. Please try again.");
            }
        }
    }

    private static void runVirtualThreadsDemo() {
        System.out.println("\n--- Initializing Virtual Threads Demo ---");
        VirtualThreadsDemo.execute();
    }

    private static void runTCPServerDemo() {
        System.out.println("\n--- Initializing TCP Socket Server ---");
        System.out.println("Note: This will block the current thread. Use Ctrl+C to terminate the server.");
        TCPServerDemo.startServer(8080);
    }

    private static void runJdbcTransactionDemo() {
        System.out.println("\n--- Initializing JDBC Transaction Demo ---");
        TransactionDemo.executeTransaction();
    }
}

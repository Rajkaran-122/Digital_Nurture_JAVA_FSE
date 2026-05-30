package com.corejava.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Exercise 33: Transaction Handling in JDBC
 * 
 * Enterprise Level Analysis:
 * Demonstrates ACID compliance by executing a money transfer transaction.
 * Uses Connection.setAutoCommit(false) and performs a Rollback on failure.
 * Includes a simulated SQL Injection prevention using PreparedStatements.
 * 
 * @author Senior Java Architect
 */
public class TransactionDemo {

    // In a real application, these credentials would be stored in Environment Variables / Vault.
    private static final String URL = "jdbc:mysql://localhost:3306/enterprise_db";
    private static final String USER = "root";
    private static final String PASS = "password"; // Replace with your local mysql pass if testing locally

    public static void executeTransaction() {
        System.out.println("Initiating JDBC Money Transfer Transaction...");

        try (Connection conn = DriverManager.getConnection(URL, USER, PASS)) {
            
            // Set up tables for the demo
            setupDatabase(conn);

            // Start Transaction
            conn.setAutoCommit(false);
            System.out.println("[INFO] Auto-commit disabled. Transaction started.");

            // 1. Debit Account A
            String debitSQL = "UPDATE Accounts SET balance = balance - ? WHERE account_id = ?";
            try (PreparedStatement debitStmt = conn.prepareStatement(debitSQL)) {
                debitStmt.setDouble(1, 500.00); // Amount to transfer
                debitStmt.setInt(2, 1);         // From Account ID 1
                int rowsUpdated = debitStmt.executeUpdate();
                System.out.println("[INFO] Debited 500.00 from Account 1. Rows updated: " + rowsUpdated);
            }

            // SIMULATED ERROR (Uncomment the line below to test Rollback!)
            // if(true) throw new SQLException("Simulated Database Crash during transfer!");

            // 2. Credit Account B
            String creditSQL = "UPDATE Accounts SET balance = balance + ? WHERE account_id = ?";
            try (PreparedStatement creditStmt = conn.prepareStatement(creditSQL)) {
                creditStmt.setDouble(1, 500.00); // Amount to transfer
                creditStmt.setInt(2, 2);         // To Account ID 2
                creditStmt.executeUpdate();
                System.out.println("[INFO] Credited 500.00 to Account 2.");
            }

            // Commit Transaction
            conn.commit();
            System.out.println("[SUCCESS] Transaction Committed. Money transfer successful.");

        } catch (SQLException e) {
            System.err.println("[ERROR] Transaction Failed! Rolling back changes...");
            System.err.println("Cause: " + e.getMessage());
            // Note: In an actual try-catch, you would need a reference to the Connection to call conn.rollback()
            // We use try-with-resources, so connection is automatically closed (which rolls back uncommitted changes).
        }
        
        System.out.println("\n[Interview Note] Why use PreparedStatements?");
        System.out.println("They pre-compile the SQL statement on the database server, optimizing execution speed.");
        System.out.println("More importantly, they completely prevent SQL Injection by escaping user input automatically.");
    }

    private static void setupDatabase(Connection conn) throws SQLException {
        try (Statement stmt = conn.createStatement()) {
            stmt.execute("CREATE TABLE IF NOT EXISTS Accounts (account_id INT PRIMARY KEY, balance DOUBLE)");
            stmt.execute("DELETE FROM Accounts"); // Clean slate
            stmt.execute("INSERT INTO Accounts VALUES (1, 1000.00), (2, 500.00)");
            System.out.println("[INFO] Test Accounts setup successfully.");
        }
    }
}

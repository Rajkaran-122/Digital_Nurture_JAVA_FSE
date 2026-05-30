# Enterprise Core Java Masterclass

This repository houses a production-grade, highly scalable implementation of the 41 Core Java tasks. It showcases Clean Architecture, SOLID principles, and the latest modern Java 21 features.

## 🗂 Architecture Overview
- **Facade Pattern (`Main.java`)**: Instead of 41 standalone files, the project uses a centralized Command Line Interface (CLI) menu. This allows examiners/interviewers to launch any specific task environment on demand.
- **Package Structure**: Domain-driven packaging (`com.corejava.network`, `com.corejava.concurrency`, etc.) ensures robust separation of concerns.

## 🚀 Advanced Implementation Highlights

### 1. High-Performance Concurrency (Exercise 40 & 41)
We moved past traditional `Thread` and `Runnable` by implementing **Java 21 Virtual Threads (`Project Loom`)**. 
- **Interview Note**: While OS threads are limited and heavyweight (~1MB stack), Virtual Threads map `M:N` to OS threads, allowing us to spin up 100,000 parallel requests without crashing the JVM or running out of memory. 

### 2. Scalable TCP Chat Server (Exercise 35)
Implemented a scalable, thread-safe TCP socket server.
- **Interview Note**: We utilized a `CopyOnWriteArrayList` to hold active clients. This ensures that while clients are iterating to broadcast messages, structural modifications (a user leaving the server) do not throw a `ConcurrentModificationException`.

### 3. ACID-Compliant JDBC Transactions (Exercise 33)
Built a mock banking system that executes multiple `UPDATE` queries within a single transaction block.
- **Interview Note**: We disabled auto-commit (`conn.setAutoCommit(false)`). If an `SQLException` occurs, everything is rolled back entirely, guaranteeing the Database remains in a consistent state (Atomicity).

## 🛠 Setup & Run
1. Ensure Java 21+ and Apache Maven are installed.
2. Compile the project: `mvn clean install`
3. Execute the CLI menu:
   ```bash
   mvn exec:java -Dexec.mainClass="com.corejava.Main"
   ```

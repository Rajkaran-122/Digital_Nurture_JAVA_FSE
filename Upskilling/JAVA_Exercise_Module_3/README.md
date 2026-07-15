# Core Java Masterclass

This repository contains the implementation of the 41 Core Java exercises. The project is structured using Maven and utilizes modern Java 21 features.

## Architecture

- **Facade Pattern (Main.java)**: A centralized command-line interface provides execution access to all 41 exercises.
- **Package Structure**: The exercises are organized by domain (e.g., `com.corejava.network`, `com.corejava.concurrency`) to maintain a clear separation of concerns.

## Key Implementations

- **Concurrency (Ex 40 & 41)**: Demonstrates Java 21 Virtual Threads (`Project Loom`) versus traditional OS threads for high-throughput tasks.
- **TCP Chat Server (Ex 35)**: A thread-safe socket server utilizing `CopyOnWriteArrayList` to handle concurrent client broadcasts.
- **JDBC Transactions (Ex 33)**: Simulates a banking transaction enforcing ACID compliance using manual commit controls and `PreparedStatement`.

## Setup and Execution

1. Ensure Java 21 and Maven are installed.
2. Compile the project: 
   `mvn clean install`
3. Execute the interactive menu:
   `mvn exec:java -Dexec.mainClass="com.corejava.Main"`


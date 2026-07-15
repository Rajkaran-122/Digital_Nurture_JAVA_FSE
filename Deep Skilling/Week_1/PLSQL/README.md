# PL/SQL Database Engineering

![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)

Welcome to the **PL/SQL** module! This folder contains the complete solutions for the PL/SQL Week 1 Exercises, meticulously organized into schema setup and individual modular exercise files.

## Directory Structure

```text
Deep Skilling\Week_1\PLSQL\
├── schema\
│   ├── 01_schema_setup.sql      # Contains the DDL (CREATE TABLE statements)
│   └── 02_sample_data.sql       # Contains the DML (INSERT statements)
├── exercises\
│   ├── 01_control_structures.sql
│   ├── 02_error_handling.sql
│   ├── 03_stored_procedures.sql
│   ├── 04_functions.sql
│   ├── 05_triggers.sql
│   ├── 06_cursors.sql
│   └── 07_packages.sql
└── README.md                    # This documentation file
```

## How to Execute

To properly execute and verify these exercises, follow these steps in your Oracle Database environment (e.g., Oracle SQL Developer, SQL*Plus):

1. **Set up the environment**
   Run the schema creation script first to build the necessary tables.
   `@schema/01_schema_setup.sql`

2. **Insert Sample Data**
   Run the sample data script to populate the tables with initial records.
   `@schema/02_sample_data.sql`

3. **Run Exercises**
   You can run the exercises in any order, but it is recommended to run them sequentially.
   > **Note:** Ensure `SET SERVEROUTPUT ON;` is executed in your session so you can see the `DBMS_OUTPUT` print statements.
   
   Example:
   `@exercises/01_control_structures.sql`
   `@exercises/02_error_handling.sql`

## Key Highlights

- **Control Structures:** Uses loops and conditional statements to apply business rules like discounts and VIP status.
- **Error Handling:** Robust exception catching with `EXCEPTIONS`, `PRAGMA EXCEPTION_INIT`, and custom error messages.
- **Stored Procedures & Functions:** Modularized business logic with standard amortization formulas and transactional integrity.
- **Triggers:** Automated auditing and constraint checking on the database level.
- **Cursors:** Explicit cursors combined with `FOR UPDATE` clauses for safe bulk operations.
- **Packages:** Grouped procedures and functions logically by entity (`CustomerManagement`, `EmployeeManagement`, `AccountOperations`) using specs and bodies.


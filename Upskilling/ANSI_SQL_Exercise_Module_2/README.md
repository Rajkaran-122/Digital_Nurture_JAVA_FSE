# ANSI SQL Masterclass (Event Management Schema)

This repository contains an enterprise-grade solution to the 25 SQL exercises for the Event Management Schema, engineered to pass a Senior Database Architect interview.

## 🗂 Architecture
- `schema/01_init_tables.sql`: DDL containing strongly-typed columns, `ENUM` states, Foreign Keys with `ON DELETE CASCADE` or `SET NULL`, and performance indexes.
- `schema/02_seed_data.sql`: DML generating sample relational data to test edge cases.
- `queries/04_complex_analysis.sql`: DQL housing the advanced aggregation, CTE, and analytical queries (Ex 21-25) containing detailed interview notes.

## 💡 Best Practices & Interview Discussion Notes

### 1. Indexing Strategy
In the initialization script, several Non-Clustered Indexes were created on foreign keys (`organizer_id`) and frequently filtered columns (`status`, `city`, `registration_date`).
**Interview Tip:** Always mention that while indexes speed up `SELECT` statements, they slow down `INSERT`/`UPDATE` operations because the B-Tree must be rebalanced. 

### 2. Common Table Expressions (CTEs)
In Exercise 24 (Average Session Duration), we used a CTE `WITH SessionDurations AS (...)`.
**Interview Tip:** CTEs improve readability over nested subqueries. Mention that in modern MySQL (8.0+), CTEs are materialized only if necessary, otherwise, the optimizer folds them into the main query block for maximum performance.

### 3. NOT EXISTS vs LEFT JOIN ... IS NULL
In Exercise 25 (Events Without Sessions), we provided two solutions.
**Interview Tip:** `LEFT JOIN ... WHERE id IS NULL` is very readable, but `NOT EXISTS` is generally faster in massive datasets because the database engine "short circuits" and stops searching the moment it finds a single matching row, whereas a `LEFT JOIN` evaluates the entire set.

### 4. Edge Cases
- **Handling NULLs:** When aggregating data (e.g., `COUNT`), remember that `COUNT(column)` ignores NULLs, while `COUNT(*)` counts rows.
- **Orphaned Records:** We enforced `ON DELETE CASCADE` for Registrations. If an Event is deleted, all registrations for that event are automatically scrubbed, preventing data corruption.

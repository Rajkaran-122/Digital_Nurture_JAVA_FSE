# ANSI SQL Masterclass

This repository contains the solutions to the 25 SQL exercises based on the Event Management Schema. The queries are optimized for MySQL and demonstrate standard enterprise data patterns.

## Architecture

- `schema/01_init_tables.sql`: DDL statements defining the tables, constraints, foreign keys, and indexes.
- `schema/02_seed_data.sql`: DML statements providing the baseline dataset for testing.
- `queries/`: Directory containing DQL solutions split by complexity (basic queries, aggregations, joins, and complex analysis).

## Implementation Notes

- **Indexing**: Non-clustered indexes are applied to foreign keys and frequently filtered columns to optimize read performance.
- **Common Table Expressions (CTEs)**: Used in advanced queries (e.g., Average Session Duration) to improve readability over nested subqueries.
- **Join Optimization**: Prefer `NOT EXISTS` or `LEFT JOIN ... IS NULL` over `NOT IN` when identifying missing relational records to maximize query evaluation speed on large datasets.
- **Data Integrity**: Foreign keys utilize `ON DELETE CASCADE` where appropriate to prevent orphaned records.

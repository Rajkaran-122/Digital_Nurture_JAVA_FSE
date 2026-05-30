-- =================================================================================
-- Senior Architect Solutions: ANSI SQL Masterclass
-- Module: Complex Analysis & Advanced Architectures (Exercises 21-25)
-- Goal: Demonstrate CTEs, Window Functions, and Optimized Joins
-- =================================================================================

-- ---------------------------------------------------------------------------------
-- Exercise 21. Top Feedback Providers
-- List top 5 users who have submitted the most feedback entries.
-- ---------------------------------------------------------------------------------
/*
 * INTERVIEW DISCUSSION:
 * This query works by joining Users and Feedback, grouping by the user, and sorting 
 * in descending order. 
 * Alternate Approach: If we only wanted user_id without full_name, we wouldn't need a JOIN.
 * Optimization Note: Creating an index on Feedback(user_id) heavily optimizes this aggregate.
 */
SELECT 
    u.user_id, 
    u.full_name, 
    COUNT(f.feedback_id) AS total_feedbacks
FROM Users u
INNER JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name
ORDER BY total_feedbacks DESC
LIMIT 5;


-- ---------------------------------------------------------------------------------
-- Exercise 22. Duplicate Registrations Check
-- Detect if a user has been registered more than once for the same event.
-- ---------------------------------------------------------------------------------
/*
 * INTERVIEW DISCUSSION:
 * We use the HAVING clause to filter groups that have a count > 1. 
 * EDGE CASE: In a production DB, this shouldn't happen if a UNIQUE constraint exists
 * on (user_id, event_id). Our schema includes this constraint, so this query acts as 
 * a secondary data-integrity verification script.
 */
SELECT 
    user_id, 
    event_id, 
    COUNT(*) as registration_count
FROM Registrations
GROUP BY user_id, event_id
HAVING COUNT(*) > 1;


-- ---------------------------------------------------------------------------------
-- Exercise 23. Registration Trends
-- Show a month-wise registration count trend over the past 12 months.
-- ---------------------------------------------------------------------------------
/*
 * INTERVIEW DISCUSSION:
 * We format the registration_date to extract the Year and Month.
 * ANSI STANDARD: EXTRACT(YEAR FROM date) is more ANSI compliant than DATE_FORMAT in MySQL,
 * but DATE_FORMAT is highly optimized in MySQL. We will use DATE_FORMAT for clean "YYYY-MM" output.
 * If there are months with 0 registrations, they won't appear here unless we left join against a Calendar table.
 */
SELECT 
    DATE_FORMAT(registration_date, '%Y-%m') AS registration_month,
    COUNT(registration_id) AS total_registrations
FROM Registrations
WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH)
GROUP BY registration_month
ORDER BY registration_month ASC;


-- ---------------------------------------------------------------------------------
-- Exercise 24. Average Session Duration per Event
-- Compute the average duration (in minutes) of sessions in each event.
-- ---------------------------------------------------------------------------------
/*
 * INTERVIEW DISCUSSION:
 * We use TIMESTAMPDIFF(MINUTE, start_time, end_time) to get duration.
 * CTE Approach: We first calculate durations in a CTE, then aggregate. This improves readability.
 * Execution Plan: Since it's an inline CTE, MySQL 8.0+ optimizes this by merging it into the main query block.
 */
WITH SessionDurations AS (
    SELECT 
        event_id,
        TIMESTAMPDIFF(MINUTE, start_time, end_time) AS duration_mins
    FROM Sessions
)
SELECT 
    e.event_id,
    e.title,
    ROUND(AVG(sd.duration_mins), 2) AS avg_duration_minutes
FROM Events e
LEFT JOIN SessionDurations sd ON e.event_id = sd.event_id
GROUP BY e.event_id, e.title;


-- ---------------------------------------------------------------------------------
-- Exercise 25. Events Without Sessions
-- List all events that currently have no sessions scheduled under them.
-- ---------------------------------------------------------------------------------
/*
 * INTERVIEW DISCUSSION:
 * There are three ways to solve this:
 * 1. LEFT JOIN ... WHERE ... IS NULL (Chosen below - very performant and readable)
 * 2. NOT IN (SELECT event_id FROM Sessions) (Can be slow if subquery has NULLs)
 * 3. NOT EXISTS (Most optimal in massive datasets, MySQL short-circuits the evaluation)
 */
 
-- Approach 1: LEFT JOIN (Industry Standard for readability)
SELECT 
    e.event_id, 
    e.title 
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE s.session_id IS NULL;

-- Approach 2: NOT EXISTS (Highly performant alternative)
/*
SELECT 
    event_id, 
    title 
FROM Events e
WHERE NOT EXISTS (
    SELECT 1 FROM Sessions s WHERE s.event_id = e.event_id
);
*/

-- ==========================================
-- Senior Architect Solutions: Aggregations
-- Exercises 11-15
-- ==========================================

-- Ex 11: Daily New User Count
SELECT registration_date, COUNT(user_id) as new_users
FROM Users
WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
GROUP BY registration_date;

-- Ex 12: Event with Maximum Sessions
WITH SessionCounts AS (
    SELECT event_id, COUNT(session_id) as total_sessions
    FROM Sessions GROUP BY event_id
)
SELECT e.title, sc.total_sessions
FROM Events e
JOIN SessionCounts sc ON e.event_id = sc.event_id
WHERE sc.total_sessions = (SELECT MAX(total_sessions) FROM SessionCounts);

-- Ex 13: Average Rating per City
SELECT e.city, ROUND(AVG(f.rating), 2) as avg_rating
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.city;

-- Ex 14: Most Registered Events
SELECT e.title, COUNT(r.registration_id) as total_regs
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title
ORDER BY total_regs DESC
LIMIT 3;

-- Ex 15: Event Session Time Conflict
SELECT s1.session_id, s2.session_id, s1.event_id
FROM Sessions s1
JOIN Sessions s2 ON s1.event_id = s2.event_id AND s1.session_id != s2.session_id
WHERE s1.start_time < s2.end_time AND s1.end_time > s2.start_time;

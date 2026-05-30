-- ==========================================
-- Senior Architect Solutions: Basic Queries
-- Exercises 1-10
-- ==========================================

-- Ex 1: User Upcoming Events
SELECT e.title, e.city, e.start_date 
FROM Registrations r
JOIN Events e ON r.event_id = e.event_id
JOIN Users u ON r.user_id = u.user_id
WHERE e.status = 'upcoming' AND u.city = e.city
ORDER BY e.start_date ASC;

-- Ex 2: Top Rated Events (avg rating max, >=10 feedback)
SELECT e.title, AVG(f.rating) as avg_rating
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(f.feedback_id) >= 10
ORDER BY avg_rating DESC;

-- Ex 3: Inactive Users (No reg in 90 days)
SELECT u.full_name, u.email
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id 
    AND r.registration_date >= DATE_SUB(CURDATE(), INTERVAL 90 DAY)
WHERE r.registration_id IS NULL;

-- Ex 4: Peak Session Hours (10 AM to 12 PM)
SELECT event_id, COUNT(session_id) as peak_sessions
FROM Sessions
WHERE TIME(start_time) >= '10:00:00' AND TIME(start_time) <= '12:00:00'
GROUP BY event_id;

-- Ex 5: Most Active Cities
SELECT u.city, COUNT(DISTINCT r.user_id) as distinct_users
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY distinct_users DESC
LIMIT 5;

-- Ex 6: Event Resource Summary
SELECT e.title, COUNT(r.resource_id) as total_resources
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title;

-- Ex 7: Low Feedback Alerts
SELECT u.full_name, e.title, f.rating, f.comments
FROM Feedback f
JOIN Users u ON f.user_id = u.user_id
JOIN Events e ON f.event_id = e.event_id
WHERE f.rating < 3;

-- Ex 8: Sessions per Upcoming Event
SELECT e.title, COUNT(s.session_id) as session_count
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id, e.title;

-- Ex 9: Organizer Event Summary
SELECT u.full_name, e.status, COUNT(e.event_id) as events_created
FROM Events e
JOIN Users u ON e.organizer_id = u.user_id
GROUP BY u.user_id, u.full_name, e.status;

-- Ex 10: Feedback Gap
SELECT e.title
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE f.feedback_id IS NULL
GROUP BY e.event_id, e.title;

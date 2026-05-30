-- ==========================================
-- Senior Architect Solutions: Advanced Joins
-- Exercises 16-20
-- ==========================================

-- Ex 16: Unregistered Active Users
SELECT u.full_name, u.email
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
WHERE u.registration_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
  AND r.registration_id IS NULL;

-- Ex 17: Multi-Session Speakers
SELECT speaker_name, COUNT(session_id) as sessions_handled
FROM Sessions
GROUP BY speaker_name
HAVING sessions_handled > 1;

-- Ex 18: Resource Availability Check
SELECT e.title
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
WHERE r.resource_id IS NULL;

-- Ex 19: Completed Events with Feedback Summary
SELECT e.title, COUNT(DISTINCT r.registration_id) as total_regs, ROUND(AVG(f.rating),2) as avg_rating
FROM Events e
LEFT JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id, e.title;

-- Ex 20: User Engagement Index
SELECT u.full_name, COUNT(DISTINCT r.event_id) as events_attended, COUNT(DISTINCT f.feedback_id) as feedbacks_given
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
LEFT JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name;

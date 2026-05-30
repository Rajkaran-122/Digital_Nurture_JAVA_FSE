-- =================================================================================
-- Senior Architect Solutions: ANSI SQL Masterclass
-- Initialization Script: Schema Definition
-- =================================================================================

-- Drop tables if they exist to allow clean re-execution
DROP TABLE IF EXISTS Feedback;
DROP TABLE IF EXISTS Registrations;
DROP TABLE IF EXISTS Sessions;
DROP TABLE IF EXISTS Resources;
DROP TABLE IF EXISTS Events;
DROP TABLE IF EXISTS Users;

-- =========================================================
-- 1. Users Table
-- =========================================================
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    city VARCHAR(100) NOT NULL,
    registration_date DATE NOT NULL
);

-- Index for frequently queried columns in analytical queries
CREATE INDEX idx_users_city ON Users(city);
CREATE INDEX idx_users_reg_date ON Users(registration_date);

-- =========================================================
-- 2. Events Table
-- =========================================================
CREATE TABLE Events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    city VARCHAR(100) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    status ENUM('upcoming', 'completed', 'cancelled') NOT NULL,
    organizer_id INT,
    FOREIGN KEY (organizer_id) REFERENCES Users(user_id) ON DELETE SET NULL
);

CREATE INDEX idx_events_status ON Events(status);
CREATE INDEX idx_events_city ON Events(city);

-- =========================================================
-- 3. Sessions Table
-- =========================================================
CREATE TABLE Sessions (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    title VARCHAR(200) NOT NULL,
    speaker_name VARCHAR(100) NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE CASCADE
);

-- =========================================================
-- 4. Registrations Table
-- =========================================================
CREATE TABLE Registrations (
    registration_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    event_id INT,
    registration_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_event (user_id, event_id) -- Prevents duplicate registrations
);

-- =========================================================
-- 5. Feedback Table
-- =========================================================
CREATE TABLE Feedback (
    feedback_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    event_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comments TEXT,
    feedback_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE CASCADE
);

-- =========================================================
-- 6. Resources Table
-- =========================================================
CREATE TABLE Resources (
    resource_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT,
    resource_type ENUM('pdf', 'image', 'link') NOT NULL,
    resource_url VARCHAR(255) NOT NULL,
    uploaded_at DATETIME NOT NULL,
    FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE CASCADE
);

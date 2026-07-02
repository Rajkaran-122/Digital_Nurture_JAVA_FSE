-- Insert Roles / Users
INSERT INTO users (username, password, roles) VALUES ('admin', '$2a$10$T1KqTXZvJ/R9H9rE4E/K5.g.VjY.U4M/M1i2zY8g.j9bK4T1M0m.a', 'ROLE_ADMIN'); -- pwd: pwd
INSERT INTO users (username, password, roles) VALUES ('user', '$2a$10$T1KqTXZvJ/R9H9rE4E/K5.g.VjY.U4M/M1i2zY8g.j9bK4T1M0m.a', 'ROLE_USER'); -- pwd: pwd

-- Insert Countries
INSERT INTO country (code, name) VALUES ('US', 'United States');
INSERT INTO country (code, name) VALUES ('DE', 'Germany');
INSERT INTO country (code, name) VALUES ('IN', 'India');
INSERT INTO country (code, name) VALUES ('JP', 'Japan');

-- Insert Departments
INSERT INTO department (name) VALUES ('IT');
INSERT INTO department (name) VALUES ('HR');

-- Insert Skills
INSERT INTO skill (name) VALUES ('Java');
INSERT INTO skill (name) VALUES ('Spring');
INSERT INTO skill (name) VALUES ('React');

-- Insert Employees (id, name, salary, permanent, date_of_birth, department_id)
INSERT INTO employee (name, salary, permanent, date_of_birth, department_id) VALUES ('John Doe', 50000, true, '1990-01-01', 1);

-- Insert Employee Skills
INSERT INTO employee_skill (employee_id, skill_id) VALUES (1, 1);
INSERT INTO employee_skill (employee_id, skill_id) VALUES (1, 2);

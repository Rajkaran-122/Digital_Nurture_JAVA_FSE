INSERT INTO department (dp_id, dp_name) VALUES (1, 'Technology');
INSERT INTO department (dp_id, dp_name) VALUES (2, 'Human Resources');
INSERT INTO department (dp_id, dp_name) VALUES (3, 'Finance');

INSERT INTO skill (sk_id, sk_name) VALUES (1, 'Java');
INSERT INTO skill (sk_id, sk_name) VALUES (2, 'Spring Boot');
INSERT INTO skill (sk_id, sk_name) VALUES (3, 'Hibernate');
INSERT INTO skill (sk_id, sk_name) VALUES (4, 'SQL');

INSERT INTO employee (em_id, em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id) VALUES (1, 'Rajkaran Yadav', 75000, true, '2004-07-14', 1);
INSERT INTO employee (em_id, em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id) VALUES (2, 'Aman Sharma', 62000, true, '1998-02-10', 1);
INSERT INTO employee (em_id, em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id) VALUES (3, 'Priya Verma', 54000, false, '1997-09-21', 2);
INSERT INTO employee (em_id, em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id) VALUES (4, 'Neha Singh', 68000, true, '1995-04-05', 3);

INSERT INTO employee_skill (es_em_id, es_sk_id) VALUES (1, 1);
INSERT INTO employee_skill (es_em_id, es_sk_id) VALUES (1, 2);
INSERT INTO employee_skill (es_em_id, es_sk_id) VALUES (1, 3);
INSERT INTO employee_skill (es_em_id, es_sk_id) VALUES (2, 1);
INSERT INTO employee_skill (es_em_id, es_sk_id) VALUES (2, 4);
INSERT INTO employee_skill (es_em_id, es_sk_id) VALUES (4, 4);

INSERT INTO users (us_id, us_name, us_email) VALUES (1, 'Rajkaran', 'rajkaran@example.com');

INSERT INTO question (qt_id, qt_text) VALUES (1, 'What is the extension of the hyper text markup language file?');
INSERT INTO question (qt_id, qt_text) VALUES (2, 'What is the maximum level of heading tag can be used in a HTML page?');
INSERT INTO question (qt_id, qt_text) VALUES (3, 'The HTML document itself begins with html and ends html. State True or False');
INSERT INTO question (qt_id, qt_text) VALUES (4, 'Choose the right option to store text value in a variable');

INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (1, 1, 0.0, '.xhtm');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (2, 1, 0.0, '.ht');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (3, 1, 1.0, '.html');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (4, 1, 0.0, '.htmx');

INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (5, 2, 0.0, '5');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (6, 2, 0.0, '3');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (7, 2, 0.0, '4');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (8, 2, 1.0, '6');

INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (9, 3, 0.0, 'false');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (10, 3, 1.0, 'true');

INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (11, 4, 0.5, '''John''');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (12, 4, 0.0, 'John');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (13, 4, 0.5, '"John"');
INSERT INTO question_option (op_id, op_qt_id, op_score, op_text) VALUES (14, 4, 0.0, '/John/');

INSERT INTO attempt (at_id, at_date, at_us_id, at_score) VALUES (1, '2026-06-24', 1, 3.0);

INSERT INTO attempt_question (aq_id, aq_at_id, aq_qt_id) VALUES (1, 1, 1);
INSERT INTO attempt_question (aq_id, aq_at_id, aq_qt_id) VALUES (2, 1, 2);
INSERT INTO attempt_question (aq_id, aq_at_id, aq_qt_id) VALUES (3, 1, 3);
INSERT INTO attempt_question (aq_id, aq_at_id, aq_qt_id) VALUES (4, 1, 4);

INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (1, 1, 1, false);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (2, 2, 1, false);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (3, 3, 1, true);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (4, 4, 1, false);

INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (5, 5, 2, false);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (6, 6, 2, true);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (7, 7, 2, false);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (8, 8, 2, false);

INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (9, 9, 3, false);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (10, 10, 3, true);

INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (11, 11, 4, true);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (12, 12, 4, false);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (13, 13, 4, false);
INSERT INTO attempt_option (ao_id, ao_op_id, ao_aq_id, ao_selected) VALUES (14, 14, 4, false);
-- Adding departments to the database
INSERT INTO departments (department_name)
VALUES
  ('Executive'),
  ('Sales'),
  ('Customer Service'),
  ('Accounting'),
  ('Public Relations');

-- Adding roles to the database with their respective department ids
INSERT INTO roles (title, salary, department_id)
VALUES
('Executive Manager', 90000.00, 1),
('Sales Manager', 90000.00, 2),
('Customer Service Manager', 90000.00, 3),
('Accounting Manager', 90000.00, 4),
('Public Relations Manager', 90000.00, 5),
('Sales Associate', 60000.00, 2),
('Customer Service Representative', 30000.00, 3),
('Accountant', 75000.00, 4),
('Public Relations Coordinator', 40000, 5);

-- Adding employees to the database with their respective role and manager ids
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Mike', 'Johnson', 3, NULL),
('Lisa', 'Garcia', 4, NULL),
('Sam', 'Lee', 5, 1),
('Tom', 'Wilson', 6, 1),
('Emily', 'Davis', 7, 1),
('Chris', 'Miller', 8, 2),
('Megan', 'Brown', 9, 2),
('David', 'Taylor', 10, 2),
('Maria', 'Perez', 11, 3),
('Juan', 'Martinez', 12, 3),
('Ana', 'Hernandez', 13, 3),
('James', 'Clark', 14, 4),
('Sarah', 'Allen', 15, 4),
('William', 'Green', 16, 5);

-- Comments added for better understanding of the code
-- Organized the code with appropriate spacing and indentation.
-- Added department name to the comments for better understanding.

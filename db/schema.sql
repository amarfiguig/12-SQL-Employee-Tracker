-- Drop the database if it exists
DROP DATABASE IF EXISTS Employee_Tracker;

-- Create a new database called Employee_Tracker
CREATE DATABASE Employee_Tracker;

-- Switch to using the newly created database
USE Employee_Tracker;

-- Create a table to store departments
CREATE TABLE department(
     id INT NOT NULL AUTO_INCREMENT, -- Create an auto-incrementing ID column
     names VARCHAR(30) NOT NULL, -- Create a column to store department names
     PRIMARY KEY (id) -- Set the ID column as the primary key for this table
);

-- Create a table to store job roles
CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT, -- Create an auto-incrementing ID column
    title VARCHAR(30) NOT NULL, -- Create a column to store the job title
    salary DECIMAL(10,2), -- Create a column to store the salary for the job
    department_id INT, -- Create a column to store the ID of the department this job belongs to
    PRIMARY KEY (id), -- Set the ID column as the primary key for this table
    FOREIGN KEY (department_id) REFERENCES department(id) -- Create a foreign key to link this table to the department table
);

-- Create a table to store employees
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT, -- Create an auto-incrementing ID column
    first_name VARCHAR(30), -- Create a column to store the employee's first name
    last_name VARCHAR(30), -- Create a column to store the employee's last name
    role_id INT, -- Create a column to store the ID of the job role this employee has
    manager_id INT, -- Create a column to store the ID of this employee's manager
    PRIMARY KEY (id), -- Set the ID column as the primary key for this table
    FOREIGN KEY (role_id) REFERENCES roles (id), -- Create a foreign key to link this table to the roles table
    FOREIGN KEY (manager_id) REFERENCES employee (id) -- Create a foreign key to link this table to itself, for a manager-employee relationship
    ON DELETE CASCADE -- When a manager is deleted, all employees under that manager should also be deleted
);

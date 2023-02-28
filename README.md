# 12-SQL-Employee-Tracker

### Module 12 Challenge

## Description

This is a Node.js application that helps users manage an employee database for a company, using Inquirer and MySQL.

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [Production](#Production)
- [Questions](#Questions)
- [Contribution](#Contribution)

<br>

## Installation

To use this application, please follow these steps:

Clone the application code from GitHub.
Install MySQL to access their open-source relational database management system.
Make sure you have a Node.js integrated terminal before proceeding. If not, download Node.
In the root directory terminal, run 'npm init'.
In the root directory terminal, run 'npm install inquirer' to install Inquirer for command-line interaction with the user.
In the root directory terminal, run 'npm install --save mysql2' to install MySQL 2 and connect the user's MySQL database to perform queries in this application.
In the root directory terminal, run 'npm install console.table --save' to install console.table to print MySQL rows to the console.

## Usage

Clone the application code from the GitHub repository.
Install MySQL to access the open source relational database management system.
Ensure that you have a Node.js integrated terminal before proceeding. If not, download Node.js.
From the root directory of the project, run npm init in the terminal to initialize the application.
Install the following packages from the terminal:
inquirer: A package to interact with the user via command-line.
mysql2: A package to connect to a MySQL database and perform queries.
console.table: A package to print MySQL rows to the console in table format.
Once the code has been cloned and packages have been installed, open the Windows command prompt (CMD) in the root directory of the project and run mysql -u root -p. Enter your MySQL password.
After MySQL has been initialized, run source db/schema.sql and source db/seeds.sql in that order to populate the database with mock data.
In the root directory terminal, run node server to activate the application.
The user will be prompted with a list of options:
View all departments: This will display a table in the terminal showing all current departments in the database by department ID and name.
View all roles: This will display a table in the terminal showing all current job roles in the database by role ID, title, salary, and the department the role corresponds to.
View all employees: This will display a table in the terminal showing all current employees by employee ID, first name, last name, title of employee job role, salary of employee, the department they work in, and the manager the employee reports to.
Add a department: This will prompt the user to input the name of the new department and generate a new unique department ID for it. The user may view the update by selecting View all departments.
Add a role: This will prompt the user to input the title of the new job role, the salary for the new job role, and the department ID that corresponds to the new job role (the user may print the department table beforehand to see the current database's department IDs). The application will generate a new unique role ID for the new job role. The user may view the update by selecting View all roles.
Add an employee: This will prompt the user to input the first and last name of the new employee, the salary for the new employee's job role, the role ID that corresponds to the new employee (the user may print the roles table beforehand to see the current database's role IDs), and the manager ID that corresponds to the new employee (the user may print the employees table beforehand to see the current database's manager IDs; a NULL value means they have no manager). The application will generate a new unique employee ID for the new employee. The user may view the update by selecting View all employees.
Update an employee: This will prompt the user to input the employee ID of the employee to be edited and the new role ID and manager ID of the employee. The application will switch the employee's current job role to the new input role and current manager to the new input manager. The user may view the update by selecting View all employees.
Delete a department: This will prompt the user to input the department ID of the department to be deleted.
Delete a role: This will prompt the user to input the role ID of the job role to be deleted.

## Features

- A command-line application for a company database that accepts user input.
- Tables in command-line will print a easy to read and understand table with proper rows and columns of database data.
- Ability to view database departments, job roles and employees.
- Ability to add departments, job roles and employees to database.
- Ability to delete departments, job roles and employees from database.
- Ability to edit current employees in databse by job roles and managers.
- All updates made to database will reflect in tables when prompted on view department, roles or employeees.

## Production

[employee-tracker](https://github.com/amarfiguig/12-SQL-Employee-Tracker)

[![employee-tracker](assets/images/screenshot.png)](https://github.com/amarfiguig/12-SQL-Employee-Tracker)

## Questions

Please feel free to reach me for additional questions at:
<br>
Email: myfiguig@gmail.com

Visit my GitHub!
<br>
GitHub: [AmarFiguig](https://github.com/amarfiguig)

### Contributions

- [AmarFiguig](https://github.com/amarfiguig)

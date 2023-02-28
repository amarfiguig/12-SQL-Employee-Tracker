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

<ul><li>Clone the application code from GitHub.</li><li>Install <a href="https://www.mysql.com/" target="_new">MySQL</a> to access their open-source relational database management system.</li><li>Make sure you have a Node.js integrated terminal before proceeding. If not, download <a href="https://nodejs.org/en/" target="_new">Node</a>.</li><li>In the root directory terminal, run 'npm init'.</li><li>In the root directory terminal, run 'npm install inquirer' to install <a href="https://www.npmjs.com/package/inquirer#installation" target="_new">Inquirer</a> for command-line interaction with the user.</li><li>In the root directory terminal, run 'npm install --save mysql2' to install <a href="https://www.npmjs.com/package/mysql2" target="_new">MySQL 2</a> and connect the user's MySQL database to perform queries in this application.</li><li>In the root directory terminal, run 'npm install console.table --save' to install <a href="https://www.npmjs.com/package/console.table" target="_new">console.table</a> to print MySQL rows to the console.</li></ul>

## Usage

<ul><li>Clone the application code from the <a href="https://github.com/yourusername/employeetracker" target="_new">GitHub repository</a>.</li><li>Install <a href="https://www.mysql.com/" target="_new">MySQL</a> to access the open source relational database management system.</li><li>Ensure that you have a Node.js integrated terminal before proceeding. If not, download <a href="https://nodejs.org/en/" target="_new">Node.js</a>.</li><li>From the root directory of the project, run <code>npm init</code> in the terminal to initialize the application.</li><li>Install the following packages from the terminal:<ul><li><code>inquirer</code>: A package to interact with the user via command-line.</li><li><code>mysql2</code>: A package to connect to a MySQL database and perform queries.</li><li><code>console.table</code>: A package to print MySQL rows to the console in table format.</li></ul></li><li>Once the code has been cloned and packages have been installed, open the Windows command prompt (CMD) in the root directory of the project and run <code>mysql -u root -p</code>. Enter your MySQL password.</li><li>After MySQL has been initialized, run <code>source db/schema.sql</code> and <code>source db/seeds.sql</code> in that order to populate the database with mock data.</li><li>In the root directory terminal, run <code>node server</code> to activate the application.</li><li>The user will be prompted with a list of options:<ul><li><code>View all departments</code>: This will display a table in the terminal showing all current departments in the database by department ID and name.</li><li><code>View all roles</code>: This will display a table in the terminal showing all current job roles in the database by role ID, title, salary, and the department the role corresponds to.</li><li><code>View all employees</code>: This will display a table in the terminal showing all current employees by employee ID, first name, last name, title of employee job role, salary of employee, the department they work in, and the manager the employee reports to.</li><li><code>Add a department</code>: This will prompt the user to input the name of the new department and generate a new unique department ID for it. The user may view the update by selecting <code>View all departments</code>.</li><li><code>Add a role</code>: This will prompt the user to input the title of the new job role, the salary for the new job role, and the department ID that corresponds to the new job role (the user may print the department table beforehand to see the current database's department IDs). The application will generate a new unique role ID for the new job role. The user may view the update by selecting <code>View all roles</code>.</li><li><code>Add an employee</code>: This will prompt the user to input the first and last name of the new employee, the salary for the new employee's job role, the role ID that corresponds to the new employee (the user may print the roles table beforehand to see the current database's role IDs), and the manager ID that corresponds to the new employee (the user may print the employees table beforehand to see the current database's manager IDs; a NULL value means they have no manager). The application will generate a new unique employee ID for the new employee. The user may view the update by selecting <code>View all employees</code>.</li><li><code>Update an employee</code>: This will prompt the user to input the employee ID of the employee to be edited and the new role ID and manager ID of the employee. The application will switch the employee's current job role to the new input role and current manager to the new input manager. The user may view the update by selecting <code>View all employees</code>.</li><li><code>Delete a department</code>: This will prompt the user to input the department ID of the department to be deleted.</li><li><code>Delete a role</code>: This will prompt the user to input the role ID of the job role to be deleted.</li></ul></li></ul>


## Features

<ul><li>This is a command-line application designed to manage a company's employee database, allowing users to interact with the database through a user-friendly interface.</li><li>The application displays database data in a well-formatted table format, making it easy for users to read and understand.</li><li>Users can view departments, job roles, and employees stored in the database, as well as add new data to the database.</li><li>The application also provides the ability to delete existing data from the database, as well as edit current employee information such as job roles and managers.</li><li>All changes made to the database are reflected in the tables displayed to the user, ensuring that the user always has access to up-to-date information.</li></ul>

## Production

[employee-tracker](https://github.com/amarfiguig/12-SQL-Employee-Tracker)

## Questions

Please don't hesitate to contact me if you have any further questions or concerns. You can reach me at:

<br>
Email: myfiguig@gmail.com

<br>
GitHub: [AmarFiguig](https://github.com/amarfiguig)

## Contributions

- [AmarFiguig](https://github.com/amarfiguig)

## License

N/A

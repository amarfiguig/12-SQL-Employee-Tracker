// Define an array of objects that contains the questions to be asked by the inquirer module
const questions = [
  
// First question: choose an action to perform
	{
		type: "list",
		name: "QuickQuestions.",
		message: "What would you like to do?",
		choices: [
			"View all departments",
			"View all roles",
			"View all employees",
			"Add a department",
			"Add a role",
			"Add an employee",
			"Update an employee",
			"Delete a department",
			"Delete a role",
			"Delete a employee",
			"Quit"
		]
	},
  
// Second question: enter the name of a add department to be added
	{
		type: "input",
		name: "addDepartment",
		message: "What is the name of the add department being added?",
		when: ({ QuickQuestions }) => {
			if (QuickQuestions === "Add a department") {
				return true;
			} else {
				return false;
			}
		},
		validate: (departmentInput) => {
			if (departmentInput) {
				return true;
			} else {
				console.log("Please enter a name for the add department!");
				return false;
			}
		}
	},

// Enter the name of a add Role Title to be added
	{
		type: "input",
		name: "addRoleTitle",
		message: "What is the title of the add role being added?",
		when: ({ QuickQuestions }) => {
			if (QuickQuestions === "Add a role") {
				return true;
			} else {
				return false;
			}
		},
		validate: (addRoleTitleInput) => {
			if (addRoleTitleInput) {
				return true;
			} else {
				console.log("Please enter a title for the add role!");
				return false;
			}
		}
	},
  
// Enter the name of a add Role Salary to be added
	{
		type: "number",
		name: "addRoleSalary",
		message: "What is the salary of the add role being added?",
		when: ({ addRoleTitle }) => {
			if (addRoleTitle) {
				return true;
			} else {
				return false;
			}
		},
		validate: (addRoleSalaryInput) => {
			if (addRoleSalaryInput) {
				return true;
			} else {
				console.log("Please enter a salary for the add role!");
				return false;
			}
		}
    
// Enter the name of a add Role Depid to be added
	{
		type: "number",
		name: "addRoleDepid",
		message: "What is the department ID of the add role being added?",
		when: ({ addRoleSalary }) => {
			if (addRoleSalary) {
				return true;
			} else {
				return false;
			}
		},
		validate: (addRoleDepidInput) => {
			if (addRoleDepidInput) {
				return true;
			} else {
				console.log("Please enter a department ID for the add role!");
				return false;
			}
		}
	},

// Add Employee First Name
	{
		type: "input",
		name: "addEmployeeFirstName",
		message: "What is the first name of the add employee being added?",
		when: ({ QuickQuestions }) => {
			if (QuickQuestions === "Add an employee") {
				return true;
			} else {
				return false;
			}
		},
		validate: (addEmployeeFirstNameInput) => {
			if (addEmployeeFirstNameInput) {
				return true;
			} else {
				console.log("Please enter a first name for the add employee!");
				return false;
			}
		}
	},

// Add Employee Last Name
	{
		type: "input",
		name: "addEmployeeLastName",
		message: "What is the last name of the add employee being added?",
		when: ({ addEmployeeFirstName }) => {
			if (addEmployeeFirstName) {
				return true;
			} else {
				return false;
			}
		},
		validate: (addEmployeeLastNameInput) => {
			if (addEmployeeLastNameInput) {
				return true;
			} else {
				console.log("Please enter a last name for the add employee!");
				return false;
			}
		}
	},

// Add Employee Role ID
	{
		type: "number",
		name: "addEmployeeRoleId",
		message: "What is the role ID of the add employee being added?",
		when: ({ addEmployeeLastName }) => {
			if (addEmployeeLastName) {
				return true;
			} else {
				return false;
			}
		},
		validate: (addEmployeeRoleIdInput) => {
			if (addEmployeeRoleIdInput) {
				return true;
			} else {
				console.log("Please enter a role ID for the add employee!");
				return false;
			}
		}
	},

// Add Employee Manager ID
	{
		type: "number",
		name: "addEmployeeManagerId",
		message: "What is the manager ID of the add employee being added?",
		when: ({ addEmployeeRoleId }) => {
			if (addEmployeeRoleId) {
				return true;
			} else {
				return false;
			}
		}
	},

// Add Update Employee
	{
		type: "number",
		name: "updateEmployee",
		message: "What is the employee ID of the employee being updated?",
		when: ({ QuickQuestions }) => {
			if (QuickQuestions === "Update an employee") {
				return true;
			} else {
				return false;
			}
		},
		validate: (updateEmployeeInput) => {
			if (updateEmployeeInput) {
				return true;
			} else {
				console.log("Please enter the employee ID for the employee being updated!");
				return false;
			}
		}
	},

// Add Update Employee
	{
		type: "number",
		name: "updateEmployeeRoleId",
		message:
			"Can you please provide the ID of the role that you want to assign to the employee?",
		when: ({ updateEmployee }) => {
			if (updateEmployee) {
				return true;
			} else {
				return false;
			}
		},
		validate: (updateEmployeeRoleIdInput) => {
			if (updateEmployeeRoleIdInput) {
				return true;
			} else {
				console.log(
					"Could you please provide the ID of the role that you want to assign to the employee?"
				);
				return false;
			}
		}
	},

// Add Update Employee Manager ID
	{
		type: "number",
		name: "updateEmployeeManagerId",
		message:
			"Can you please provide the ID of the manager that you want to assign to the employee?",
		when: ({ updateEmployeeRoleId }) => {
			if (updateEmployeeRoleId) {
				return true;
			} else {
				return false;
			}
		}
	},
    
// Delete Departement, Role, Employee,
	{
		type: "number",
		name: "deleteDepartment",
		message:
			"Can you please provide the ID of the department that you want to delete?",
		when: ({ QuickQuestions }) => {
			if (QuickQuestions === "Delete a department") {
				return true;
			} else {
				return false;
			}
		},
		validate: (deleteDepartmentInput) => {
			if (deleteDepartmentInput) {
				return true;
			} else {
				console.log(
					"Could you please provide the ID of the department that you want to delete?"
				);
				return false;
			}
		}
	},
	{
		type: "number",
		name: "deleteRole",
		message: "Can you please provide the ID of the role that you want to delete?",
		when: ({ QuickQuestions }) => {
			if (QuickQuestions === "Delete a role") {
				return true;
			} else {
				return false;
			}
		},
		validate: (deleteRoleInput) => {
			if (deleteRoleInput) {
				return true;
			} else {
				console.log(
					"Could you please provide the ID of the role that you want to delete?"
				);
				return false;
			}
		}
	},
	{
		type: "number",
		name: "deleteEmployee",
		message:
			"Can you please provide the ID of the employee that you want to delete?",
		when: ({ QuickQuestions }) => {
			if (QuickQuestions === "Delete a employee") {
				return true;
			} else {
				return false;
			}
		},
		validate: (deleteEmployeeInput) => {
			if (deleteEmployeeInput) {
				return true;
			} else {
				console.log(
					"Can you please provide the ID of the employee that you want to delete?"
				);
				return false;
			}
		}
	}

// end of questions
];

module.exports = questions;

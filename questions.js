// Define an array of objects that contains the questions to be asked by the inquirer module
const questions = [
  
// First question: choose an action to perform
	{
		type: "list",
		name: "QuickQuestions.",
		message: "Please let me know how I can assist you today.",
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
		message: "May I know the name of the department that is being added, please?",
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
				console.log("Kindly provide a name for the department that you would like to add.");
				return false;
			}
		}
	},

// Enter the name of a add Role Title to be added
	{
		type: "input",
		name: "addRoleTitle",
		message: "May I know the title of the role that is being added, please?",
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
		message: "Could you please provide the salary for the role that is being added?",
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
				console.log("Kindly provide a salary for the role that you would like to add.");
				return false;
			}
		}
    
// Enter the name of a add Role Depid to be added
	{
		type: "number",
		name: "addRoleDepid",
		message: "May I know the department ID of the department to which the role is being added, please?",
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
				console.log("Kindly provide a department ID for the role that you would like to add.");
				return false;
			}
		}
	},

// Add Employee First Name
	{
		type: "input",
		name: "addEmployeeFirstName",
		message: "May I know the first name of the employee that is being added, please?",
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
				console.log("Kindly provide a first name for the employee that you would like to add.");
				return false;
			}
		}
	},

// Add Employee Last Name
	{
		type: "input",
		name: "addEmployeeLastName",
		message: "May I know the last name of the employee that is being added, please?",
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
		message: "May I know the role ID of the role that is being assigned to the employee being added, please?",
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
				console.log("Kindly provide a role ID for the employee that you would like to add.");
				return false;
			}
		}
	},

// Add Employee Manager ID
	{
		type: "number",
		name: "addEmployeeManagerId",
		message: "May I know the manager ID of the manager to whom the employee being added will report, please?",
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
		message: "May I know the ID of the employee whose information is being updated, please?",
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
				console.log("Kindly provide the ID of the employee whose information you would like to update.");
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

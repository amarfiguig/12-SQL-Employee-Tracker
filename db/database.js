// Import the mysql2 package
const mysql = require("mysql2");

// Define a class to connect to a database
class InitialiseDatabase {
constructor(info) {
// Store the database connection information
this.info = info;
// Set the initial value of the connection to null
this.db = null;
}

// Check if the connection information is valid
validate() {
const { host, user, password, database } = this.info;
if (!host || !user || !password || !database) {
// Throw an error if the information is missing
throw new Error("Invalid database details.");
}
}

// Connect to the database using the information provided
connect() {
// Make sure the connection information is valid
this.validate();

javascript
Copy code
const { host, user, password, database } = this.info;

// Create a connection to the database
this.db = mysql.createConnection(
  {
    host: host,
    user: user,
    password: password,
    database: database,
  },
  // Log a message when the connection is established
  console.log(`Successfully connected to the database.`)
);
}

// Disconnect from the database
disconnect() {
// End the database connection
this.db.end();
}
}

// Export the InitialiseDatabase class so it can be used in other files
module.exports = InitialiseDatabase;

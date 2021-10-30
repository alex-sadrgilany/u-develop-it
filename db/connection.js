const mysql = require("mysql2");

// connect to the database
const db = mysql.createConnection(
    {
        host: "localhost",
        // sql username
        user: "root",
        // password
        password: "password123!",
        database: "election"
    },
    console.log("Connected to the election database.")
);

module.exports = db;
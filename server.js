//requore express
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const inquirer = require('inquirer');
const fs = require('fs');
const { createConnection } = require('net');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the movies_db database.`)
);

//console display
inquirer
  .prompt([
    {
      type: 'list',
      name: 'question',
      message: 'What would you like to do?',
      choices: [
      'View all departments', 
      'View all roles', 
      'View all employees', 
      'Add a department', 
      'Add a role', 
      'Add an employee', 
      'Update an employee role'
    ]
    },
])

.then(async (answers) => {
    switch(answers.action) {
        case 'View all departments':
            const [departments] = await connection.execute('SELECT * FROM departments')
            break;
        case 'View all roles':
            const [roles] = await connection.execute('SELECT * FROM roles');
            console.table(roles);
            break;
        case 'View all employees':
            const [employees] = await connection.execute('SELECT * FROM employees');
            console.table(employees);
            break;
        case 'Add a department':
            break;
        case 'Add a role':
            break; 
        case 'Add an employee':
            break;
        case 'Update an employee role':
            break;
    }
})

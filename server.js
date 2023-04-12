
const mysql = require('mysql2');

const inquirer = require('inquirer');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);


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
            const [departments] = await db.execute('SELECT * FROM departments')
            console.table(departments);
            break;
        case 'View all roles':
            const [roles] = await db.execute('SELECT * FROM roles');
            console.table(roles);
            break;
        case 'View all employees':
            const [employees] = await database.execute('SELECT * FROM employees');
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
});

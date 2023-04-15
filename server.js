const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db',

  },
  console.log(`Connected to the employees_db database.`)
);

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add employee',
        'Update an employee role'
      ]
    },
  ]);

  switch (answers.action) {

    case 'View all departments':
      const departments = await db.promise().query('SELECT * FROM departments')
      console.table(departments);
      break;

    case 'View all roles':
      const roles = await db.promise().query('SELECT * FROM employee_roles')
      console.log(results)
      break;

    case 'View all employees':
      const employees = await db.promise().query('SELECT * FROM employees')
      console.log(results);
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
}

main();

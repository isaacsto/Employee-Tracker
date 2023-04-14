const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
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
        'Add an employee',
        'Update an employee role'
      ]
    },
  ]);

  switch (answers.action) {
    case 'View all departments':
      const [departments] = db.query('SELECT * FROM departments', function(err, results){
        console.log(results)
      });
      console.table(departments);
      break;
    case 'View all roles':
      const [roles] = await db.execute('SELECT * FROM roles');
      console.table(roles);
      break;
    case 'View all employees':
      const [employees] = await db.execute('SELECT * FROM employees');
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
}

main();

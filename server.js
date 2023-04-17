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
      console.table(departments[0]);
      break;

 case 'View all roles':
      const employee_roles = await db.promise().query('SELECT employee_roles.id, employee_roles.title, departments.department_name AS department, employee_roles.salary FROM employee_roles LEFT JOIN departments on employee_roles.department_id = departments.id')   
      console.table(employee_roles[0]);
      break;

    case 'View all employees':
      const employees = await db.promise().query('SELECT employees.id, employees.employee_name, employee_roles.title, employee_roles.salary FROM employees INNER JOIN employee_roles ON employees.title = employee_roles.title')
      console.table(employees[0]);
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

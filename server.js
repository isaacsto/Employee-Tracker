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
        'Add an employee',
        'Update an employee role'
      ]
    },
  ]);
  console.log(answers) 
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
      inquirer.prompt(
        {
          type: 'input',
          name: 'departmentName',
          message: 'New department name:',
        }
      )
      .then(function(answer){
        console.log(answer);
        const sql = 'INSERT INTO departments (department_name) VALUES (?)';
        db.query(sql, answer.departmentName, function(err, result) {
          if (err) throw err;
          console.log(`Added ${answer.departmentName} to departments table`)
        });
      })
      break;

    case 'Add a role':
      inquirer.prompt(
        {
          type: 'input',
          name: 'roleInfo',
          message: 'Please enter a new role name, a role id, a salary, and the department id:',
        }
      )
      .then(function(answer){
        console.log(answer);
        const [roleName, roleId, salary, deptId] = answer.roleInfo.split(',');
        const sql = 'INSERT INTO employee_roles (title, role_id, salary, department_id) VALUES (?, ?, ?, ?)';
        db.query(sql, [roleName, roleId, salary, deptId], function(err, result) {
          if (err) throw err;
          console.log(`Added ${roleName} to employee_roles table`)
        });
      })
      break;

    case 'Add an employee':
      inquirer.prompt(
        {
          type: 'input',
          name: 'employeeInfo',
          message: 'Please enter new employee name, department id, job title, and manager:',
        }
      )
      .then(function(answer){
        console.log(answer);
        const [employeName, departmentId, jobTitle, manager] = answer.employeeInfo.split(',');
        const sql = 'INSERT INTO employees (employee_name, department_id, title, manager) VALUES (?, ?, ?, ?)';
        db.query(sql, [employeeName, departmentId, jobTitle, manager], function(err, result) {
          if (err) throw err;
          console.log(`Added ${employeeName} to employees table`)
        });
      })
      break;  

    case 'Update an employee role':
      inquirer.prompt([
        {
          type: 'list',
          name: 'name',
          message: 'Please select and employee to update:',
          choices: [
            'Bob Ross',
            'Linda Evangelista',
            'Ralph Fienz',
            'Karen Pence',
            'Anthony Bourdain',
            'Samuel L. Jackson',
            "Ted Bundy",
            "John F Kennedy Jr.",
            "Natalie Wynn",
            "Tasya Van Ree",
            "Millie Bobby Brown",
            "Peter Kropotkin",
            "Rupaul",
            "Bindi Irwin",
            "Jack Skellington",
            "Elon Musk",
            "Kanye West",
            "Florence Pugh",
            "Fyodor Dosotoevsky"
          ]
        },
        {
          type: 'input',
          name: 'newRole',
          message: "Please enter a new role for this employee:"
      }]
      )
      
      .then(function(answer){
        console.log(answer);
        const sql = `UPDATE employees SET title = '${answer.newRole}' WHERE employee_name = '${answer.name}'`;
        db.query(sql, function(err, result) {
          if (err) throw err;
          console.log(`Updated ${answer.name}'s role to ${answer.newRole}`)
        });
      })
      
      break;
  }
}

main();

SELECT employees.employee_name, employee_roles.salary
FROM employees
JOIN employee_roles
ON employees.department_id = employee_roles.department_id AND employees.title = employee_roles.title;

SELECT employees.employee_name AS name, employee_roles.title AS title 
FROM employees 
JOIN employee_roles ON employee.role_id = employee_roles.id 
JOIN departments ON employee_roles.department_id = departments.id; 
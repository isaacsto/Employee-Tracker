SELECT employees.employee_name AS name, employee_roles.title AS title 
FROM employees 
JOIN employees_roles ON employees.role_id = employee_roles.id 
JOIN departments ON employee_roles.department_id = departments.id; 
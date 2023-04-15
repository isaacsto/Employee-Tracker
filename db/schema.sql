DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(60) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT, 
  FOREIGN KEY (role_id) REFERENCES employee_roles(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);

CREATE TABLE employee_roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10, 2) NOT NULL, 
    department_id INT NOT NULL,
    department_id INT NOT NULL, 
    FOREIGN KEY (department_id) REFERENCES departments(id)
    
);

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
   
);
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
   
);

CREATE TABLE employee_roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    role_id INT, 
    salary DECIMAL (10, 2), 
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES departments(id)
    
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(60) NOT NULL,
  department_id INT, 
  title VARCHAR(30) NOT NULL,
  manager VARCHAR(30)
);




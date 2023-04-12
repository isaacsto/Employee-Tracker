DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(100) NOT NULL
);

CREATE TABLE employee_roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_role VARCHAR(100),
    review TEXT NOT NULL,
    /* FOREIGN KEY (employee_roles)
    REFERENCES employee(id) */
    ON DELETE SET NULL
);

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(100),
    review TEXT NOT NULL,
   /*  FOREIGN KEY (employee_role)
    REFERENCES employee(id) */
    ON DELETE SET NULL
);
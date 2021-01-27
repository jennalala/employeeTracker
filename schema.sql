DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
        REFERENCES department (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
        REFERENCES role (id),
    FOREIGN KEY (manager_id)
        REFERENCES employee (id)
);
INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1), ("Sales Person", 80000, 1), ("Lead Engineer", 150000, 2), ("Software Engineer", 120000, 2), ("Lead Accountant", 125000, 3),("Junior Accountant", 90000, 3), ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4);

SELECT * FROM role;

INSERT INTO employee (firstName,lastName, roleId,managerId)
VALUES  ("John","Doe",1,null), ("Mike","Chan",2,1), ("Ashley", "Rodriguez", 3, null), ("Kevin","Tupik",4,3),("Kunal", "Singh", 5, null), ("Malia", "Brown", 6, 5), ("Sarah", "Lourd", 7, null), ("Tom", "Allen", 8, 7);

SELECT * FROM employee;

SELECT employee.id, employee.firstName, employee.lastName, role.title, role.salary, department.name AS department
FROM employee 
LEFT JOIN role ON employee.roleId = role.Id 
LEFT JOIN department ON role.department_id = department.Id;

SELECT employee.id, employee.firstName, employee.lastName,role.title, role.salary
FROM employee
LEFT JOIN role ON employee.roleID = role.id
INNER JOIN department ON role.department_id = department.id
WHERE department.ID = 3;

SELECT role.title AS "Title" , role.salary AS "Salary", department.name AS "Department"
FROM role
LEFT JOIN department ON role.department_id = department.id;

INSERT INTO employees (employee_name, role_id, dapartment_id, title, salary)
VALUES ("Bob Ross", 1, 1 "Head Chef", 100000.00),
       ("Linda Evangelista", 2, 2, "Sous Chef", 70000.00),
       ("Ralph Fienz", 3, 2, "Sous Chef", 700000.00),
       ("Karen Pence", 4, 1, "Linecook", 45000.00),
       ("Anthony Bourdain", 5, 1, "Linecook", 45000.00),
       ("Samuel L. Jackson", 6, 1, "Linecook", 45000.00),
       ("Ted Bundy", 7, 1, "Dishwasher", 25000.00),
       ("John F Kennedy Jr.", 8, 2, "Maitre d", 55000.00),
       ("Natalie Wynn", 9, 2, "Host", 30000.00),
       ("Tasya Van Ree", 10, 2 "Host", 30000.00),
       ("Millie Bobby Brown", "Host", 30000.00),
       ("Peter Kropotkin", 11, 2, "Bartender", 90000.00),
       ("Elon Musk", 12, 2, "Waiter" 40000.00),
       ("Bindi Irwin", 13, 2, "Waiter", 40000.00),
       ("Jack Skellington", 14, 2, "Waiter", 40000.00),
       ("RuPaul", 15, 2, "Busser", 25000.00),
       ("Kanye West", 16, 2, "Busser", 25000.00),
       ("Florence Pugh", 17, 3, "Manager", 70000.00 )
       ("Fyodor Dosotoevsky", 18, 3, "Assistant Manager", 60000.00);

INSERT INTO employee_roles (role_title, department_id)
VALUES ("Head Chef", 1),
       ("Sous chef", 1),
       ("Linecook", 1),
       ("Dishwasher", 1),
       ("Maitre d", 2),
       ("Host", 2),
       ("Bartender", 2),
       ("Waiter", 2),
       ("Busser", 2),
       ("Manager", 3),
       ("Assistant Manager", 3);
       

INSERT INTO departments (departments)
VALUES ("Back of House"),
       ("Front of House"),
       ("Management");
      
       
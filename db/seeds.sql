
INSERT INTO departments (department_name)
VALUES ("Back of House"),
       ("Front of House"),
       ("Management"); */
      
INSERT INTO employee_roles (title, salary, department_id)
VALUES ("Head Chef", 100000.00, 1),
       ("Sous chef", 70000.00, 1),
       ("Linecook", 40000.00, 1),
       ("Dishwasher", 25000.00, 1),
       ("Maitre d", 45000.00, 2),
       ("Host", 35000.00, 2),
       ("Bartender", 90000.00, 2),
       ("Waiter", 40000.00, 2),
       ("Busser", 25000.00, 2),
       ("Manager", 70000.00, 3),
       ("Assistant Manager", 60000.00, 3);
       

INSERT INTO employees (employee_name, department_id, title)
VALUES ("Bob Ross", 1, "Head Chef"),
       ("Linda Evangelista", 1, "Sous Chef"),
       ("Ralph Fienz", 1, "Sous Chef"),
       ("Karen Pence", 1, "Linecook"),
       ("Anthony Bourdain", 1, "Linecook"),
       ("Samuel L. Jackson", 1, "Linecook"),
       ("Ted Bundy", 1, "Dishwasher"),
       ("John F Kennedy Jr.", 2, "Maitre d"),
       ("Natalie Wynn", 2, "Host"),
       ("Tasya Van Ree", 2, "Host"),
       ("Millie Bobby Brown", 2, "Host"),
       ("Peter Kropotkin", 2, "Bartender"),
       ("RuPaul", 2, "Waiter"),
       ("Bindi Irwin", 2, "Waiter"),
       ("Jack Skellington", 2, "Waiter"),
       ("Elon Musk", 2, "Busser"),
       ("Kanye West", 2, "Busser"),
       ("Florence Pugh", 3, "Manager"),
       ("Fyodor Dosotoevsky", 3, "Assistant Manager"); 


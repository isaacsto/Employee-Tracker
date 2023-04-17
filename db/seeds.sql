
INSERT INTO departments (department_name)
VALUES ("Back of House"),
       ("Front of House"),
       ("Management"); 
      
INSERT INTO employee_roles (title, role_id, salary, department_id)
VALUES ("Head Chef", 3, 100000.00, 1),
       ("Sous chef", 4, 70000.00, 1),
       ("Linecook", 9, 40000.00, 1),
       ("Dishwasher", 11, 25000.00, 1),
       ("Maitre d", 5, 45000.00, 2),
       ("Host", 8, 35000.00, 2),
       ("Bartender", 6, 90000.00, 2),
       ("Waiter", 7, 40000.00, 2),
       ("Busser", 10, 25000.00, 2),
       ("Manager", 1, 70000.00, 3),
       ("Assistant Manager", 2, 60000.00, 3);
       

INSERT INTO employees (employee_name, department_id, title, manager)
VALUES ("Bob Ross", 1, "Head Chef", "NA(Owner)"),
       ("Linda Evangelista", 1, "Sous Chef", "Bob Ross"),
       ("Ralph Fienz", 1, "Sous Chef", "Bob Ross"),
       ("Karen Pence", 1, "Linecook", "Bob Ross"),
       ("Anthony Bourdain", 1, "Linecook", "Bob Ross"),
       ("Samuel L. Jackson", 1, "Linecook", "Bob Ross"),
       ("Ted Bundy", 1, "Dishwasher", "Bob Ross"),
       ("John F Kennedy Jr.", 2, "Maitre d", "Florence Pugh"),
       ("Natalie Wynn", 2, "Host", "Florence Pugh"),
       ("Tasya Van Ree", 2, "Host", "Florence Pugh"),
       ("Millie Bobby Brown", 2, "Host", "Florence Pugh"),
       ("Peter Kropotkin", 2, "Bartender", "Florence Pugh"),
       ("RuPaul", 2, "Waiter", "Florence Pugh"),
       ("Bindi Irwin", 2, "Waiter", "Florence Pugh"),
       ("Jack Skellington", 2, "Waiter", "Florence Pugh"),
       ("Elon Musk", 2, "Busser", "Florence Pugh"),
       ("Kanye West", 2, "Busser", "Florence Pugh"),
       ("Florence Pugh", 3, "Manager", "NA(Owner)"),
       ("Fyodor Dosotoevsky", 3, "Assistant Manager", "Florence Pugh"); 


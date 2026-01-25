//– створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname , email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product (title, price) {
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(1, 'Alex', 'Smith', 'alex.smth@gmail.com', '+56587854555',
        new Product('TV', 200),
        new Product('iPhone 16', 800),
        new Product('Laptop', 1200),
        new Product('Headphones', 150),
        new Product('Smart Watch', 300)
    ),
    new Client(2, 'Emily', 'Brown', 'emily.brown@gmail.com', '+56587854556',
        new Product('Tablet', 500),
        new Product('Keyboard', 70),
        new Product('Mouse', 40)
    ),
    new Client(3, 'Michael', 'Johnson', 'michael.johnson@gmail.com', '+56587854557',
        new Product('Camera', 900),
        new Product('Tripod', 120),
        new Product('Memory Card', 60)
    ),
    new Client(4, 'Sarah', 'Davis', 'sarah.davis@gmail.com', '+56587854558',
        new Product('Monitor', 350),
        new Product('Webcam', 90),
        new Product('Speakers', 110)
    ),
    new Client(5, 'Daniel', 'Wilson', 'daniel.wilson@gmail.com', '+56587854559',
        new Product('Printer', 250)
    ),
    new Client(6, 'Olivia', 'Taylor', 'olivia.taylor@gmail.com', '+56587854560',
        new Product('Router', 140)
    ),
    new Client(7, 'James', 'Anderson', 'james.anderson@gmail.com', '+56587854561',
        new Product('PlayStation 5', 600),
        new Product('Gamepad', 80)
    ),
    new Client(8, 'Sophia', 'Miller', 'sophia.miller@gmail.com', '+56587854562',
        new Product('Coffee Machine', 400),
        new Product('Blender', 110)
    ),
    new Client(9, 'Liam', 'Thomas', 'liam.thomas@gmail.com', '+56587854563',
        new Product('Desk Lamp', 60),
        new Product('Notebook', 15)
    ),
    new Client(10, 'Emma', 'Moore', 'emma.moore@gmail.com', '+56587854564',
        new Product('Vacuum Cleaner', 500),
        new Product('Iron', 90)
    )
]
console.log(clients);
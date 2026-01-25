//– Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let users = [
    new User(1, "John", "Smith", "john.smith@gmail.com", '+12344565'),
    new User(2, "Anna", "Brown", "anna.brown@gmail.com", '+12344566'),
    new User(3, "Michael", "Johnson", "michael.johnson@gmail.com", '+12344567'),
    new User(4, "Emily", "Davis", "emily.davis@gmail.com", '+12344568'),
    new User(5, "David", "Wilson", "david.wilson@gmail.com", '+12344569'),
    new User(6, "Sarah", "Miller", "sarah.miller@gmail.com", '+12344570'),
    new User(7, "Daniel", "Taylor", "daniel.taylor@gmail.com", '+12344571'),
    new User(8, "Olivia", "Anderson", "olivia.anderson@gmail.com", '+12344572'),
    new User(9, "James", "Thomas", "james.thomas@gmail.com", '+12344573'),
    new User(10, "Sophia", "Martinez", "sophia.martinez@gmail.com", '+12344574')
];

console.log(users);
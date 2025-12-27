// – Дано 2 масиви з рівною кількістю об’єктів.
//
// Масиви:
//
// let usersWithId = [
//
//     {id: 1, name: ‘vasya’, age: 31, status: false},
//
//     {id: 2, name: ‘petya’, age: 30, status: true},
//
//     {id: 3, name: ‘kolya’, age: 29, status: true},
//
//     {id: 4, name: ‘olya’, age: 28, status: false}
//
// ];
//
//
//
// let citiesWithId = [
//
//     {user_id: 3, country: ‘USA’, city: ‘Portland’},
//
//     {user_id: 1, country: ‘Ukraine’, city: ‘Ternopil’},
//
//     {user_id: 2, country: ‘Poland’, city: ‘Krakow’},
//
//     {user_id: 4, country: ‘USA’, city: ‘Miami’}
//
// ];
//
//
//
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив
//
// Example:
//
// let usersWithCities = [
//
//     {
//
//         id: 1, // <===
//
//         name: ‘vasya’,
//
//         age: 31,
//
//         status: false,
//
//         address: {
//
//             user_id: 1, // <===
//
//             country: ‘Ukraine’,
//
//             city: ‘Ternopil’
//
//         }
//
//     },
//
//     // TO BE CONTINUED …..
//
// ]

// let usersWithId = [
//
//     {id: 1, name: 'vasya', age: 31, status: false},
//
//     {id: 2, name: 'petya', age: 30, status: true},
//
//     {id: 3, name: 'kolya', age: 29, status: true},
//
//     {id: 4, name: 'olya', age: 28, status: false}
//
// ];
//
//
//
// let citiesWithId = [
//
//     {user_id: 3, country: 'USA', city: 'Portland'},
//
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//
//     {user_id: 4, country: 'USA', city: 'Miami'}
//
// ];
//
// let usersWithCities = [];

// for (let i = 0; i < usersWithId.length; i++) {
//     let user = usersWithId[i];
//
//     for (let j = 0; j < citiesWithId.length; j++) {
//         let city = citiesWithId[j];
//
//         if (user.id === city.user_id) {
//             user.address = city
//
//             break;
//         }
//     }
//     usersWithCities.push(user);
// }
// console.log(usersWithCities);

// for (let user of usersWithId) {
//
//     for (let city of citiesWithId) {
//
//         if (user.id === city.user_id) {
//             user.address = city
//             break;
//         }
//     }
//     usersWithCities.push(user);
// }



// let employees = [
//     {id: 1, name: "Anna", department: "HR"},
//     {id: 2, name: "Max", department: "IT"},
//     {id: 3, name: "Olga", department: "Finance"},
//     {id: 4, name: "John", department: "Marketing"}
// ];
//
// let salaries = [
//     {emp_id: 3, base: 3500, bonus: 500},
//     {emp_id: 1, base: 3000, bonus: 200},
//     {emp_id: 4, base: 4000, bonus: 600},
//     {emp_id: 2, base: 4500, bonus: 700}
// ];
//
// let employeesWithSalaries = [];
//
// for (let i = 0; i < employees.length; i++) {
//     let employee = employees[i];
//
//     for (let s = 0; s < salaries.length; s++) {
//         let salary = salaries[s];
//
//         if (employee.id === salary.emp_id) {
//             employee.salary = salary
//             break;
//         }
//     }
//     employeesWithSalaries.push(employee);
//
// }
// console.log(employeesWithSalaries);
//
// for (let employee of employees) {
//
//     for (let salary of salaries) {
//
//         if (employee.id === salary.emp_id) {
//             employee.salary = salary;
//             break;
//         }
//     }
//     employeesWithSalaries.push(employee);
// }
// console.log(employeesWithSalaries);


// let products = [
//     {id: 1, name: "Laptop", category: "Electronics"},
//     {id: 2, name: "Chair", category: "Furniture"},
//     {id: 3, name: "Pen", category: "Stationery"},
//     {id: 4, name: "Headphones", category: "Electronics"}
// ];
//
// let stocks = [
//     {product_id: 4, quantity: 15, warehouse: "A"},
//     {product_id: 2, quantity: 50, warehouse: "B"},
//     {product_id: 1, quantity: 10, warehouse: "A"},
//     {product_id: 3, quantity: 200, warehouse: "C"}
// ];
//
// let productsWithStock = [];
//
// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//
//     for (let j = 0; j < stocks.length; j++) {
//         let stock = stocks[j];
//
//         if (product.id === stock.product_id) {
//            product.inventory = stock;
//             break;
//         }
//     }
//     productsWithStock.push(product);
// }
// console.log(productsWithStock);
//
// for (let product of products) {
//
//     for (let stock of stocks) {
//         if (stock.product_id === product.id) {
//             product.inventory = stock;
//             break;
//         }
//     }
//     productsWithStock.push(product);
// }
// console.log(productsWithStock);
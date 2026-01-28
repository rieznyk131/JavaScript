// let name = 'John';
// let surname = 'Snow';
// let age = 21;
//
// let user = {
//     name,
//     surname,
//     age,
//     foo() {
//         console.log(this);
//     }
// }
// user.foo()

// let user = {
//     name: 'john',
//     surname: 'Snow',
//     age: 26,
//     foo() {
//         console.log('hi');
//     }
// }
//
// let {name, age, surname, foo} = user;
// console.log(name);
// console.log(age);
// console.log(surname);
// foo()


// let name = 'John';
// let surname = 'Snow';
// let age = 26;
//
// let user = {
//     name,
//     surname,
//     age,
//     wife: {
//         name: 'Dany',
//         age: 25
//     },
//     foo() {
//         console.log(this);
//     }
// }
// user.foo()
//
// let {name: userName, age: userAge, wife: {name: wifeName}, wife} = user;
// console.log(userName, userAge, wife);

// let numbers = [11, 22, 33];
//
//  let [a, b, c] = numbers;
//  console.log(a,  c);


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let [{name, age, status}, user2] = users;
// // let {name, age, status} = user1;
// // console.log(name, age);
// console.log(name);
//
// let person = {
//     name: "John",
//     surname: "Snow",
//     details: {
//         age: 25,
//         location: 'Night Watch'
//     }
// }
//
// let {details: {age}} = person;
// console.log(age);

// let person = {
//     name: "John",
//     surname: "Snow"
// };
//
// let {name, surname, age = 25} = person;
// console.log(age);
// console.log(person);

// function greet({name, age}) {
//     console.log(`Hello, ${name}! Your age is ${age}!`);
// }
//
// let person = {
//     name: "John",
//     age: 25
// }
// greet(person);

// let person = {
//     name: "John",
//     age: 25,
//     address: {
//         location: 'Night Watch'
//     }
// }
//
// let {name: fullName = 'John Snow', age, address: {location: personLocation, zip: zipCode ='0000'}} = person;
// console.log(zipCode);

// function foo([a, b, c]) {
//     console.log(a + b + c);
// }
//
// let nums = [11, 22, 33, 44, 55];
// foo(nums)

// let arr = ['1'];
// let [first, second = 'default'] = arr;
// console.log(second);

// let user = {};
// [user.name,
//     user.surname] = 'John Snow'.split(' ');
// console.log(user.name);
// console.log(user);

// let arr = [11, 22, 33, 44];
// let [first, second, ...rest] = arr;
// console.log(rest);

// let user = {
//     name: "John",
//     surname: "Snow",
//     age: 25,
//     location: 'Night Watch'
// }
// let {name, surname, ...rest} = user;
// console.log(rest);

// let c = 1;
// let d = 1;
//
// const obj = {c: 2, d: 3};
// ({c,d} = obj);
// console.log(c);
// console.log(obj);

let a = 1;
let b = 1;

let arr = [2,3];
[a,b] = arr;
console.log(a);
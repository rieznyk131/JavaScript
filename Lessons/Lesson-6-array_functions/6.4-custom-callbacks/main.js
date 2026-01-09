let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// Вывести каждый объект массива отдельно:
// users.forEach(function(value) {
//     console.log(value);
// })
//
// users.forEach(value => console.log(value));

//Фильтрация
// let filteredUsers = users.filter(function(value){
//     return value.age > 30;
// });
// console.log(filteredUsers);
//
// let filteredUsers = users.filter(value => value.age > 30);
// console.log(filteredUsers);

//MAP - итерирует массив с объектами, делает заданные изменения в массиве, возвращает новый массив с измененными данными.

// let mapedUsers = users.map(function(value, index) {
//     let newUser = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//     }
//     return newUser;
// });
// console.log(mapedUsers);
//
// let mapedUsers = users.map(function(value, index) {
//     return {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//     }
// });
// console.log(mapedUsers);
//
// let mappedUsers = users.map(function(value, index) {
//     return {...value, id: index + 1};
// });
// console.log(mappedUsers);
//
// let mappedUsers = users.map((value, index) => {
//     return {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
// });
// console.log(mappedUsers);

//FIND - находит первое вхождение элемента по заданному условию
// let find = users.find(value => value.name === 'max');
// console.log(find);

//EVERY берет каждый элемент массива и проверяет является ли заданный элемент true. Если все элементы имеют статус true, то функция вернет true, если какой-то один из єлементов не имеет заданного параметра, відаст false;

// console.log(users.every(value => value.name));

//SOME.  берет каждый элемент массива и проверяет является ли заданный элемент true. Если хоть один элемент имеет статус true, то функция вернет true, если ни один из єлементов не имеет заданного параметра, відаст false;

// console.log(users.some(value => value.age === 14));

//SORT

// let sort = users.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(sort);

// let sort = users.sort((a, b) => {
//     return b.age - a.age
// });
// console.log(sort);

// let nameSort = users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// });
// console.log(nameSort);

//REDUCE
let reduce = users.reduce((acc, user) => {
    if (user.status) {
        acc.statT.push(user)
    } else {
        acc.statF.push(user)
    }

    return acc;
}, {statT:[], statF:[]});

console.log(reduce);

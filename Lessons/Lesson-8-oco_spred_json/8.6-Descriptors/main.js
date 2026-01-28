let user = {
    name: 'John',
    surname: 'Snow',
}

console.log(user);

// user.name = 'Jon';
// console.log(user);
//
// for (let userKey in user) {
//     console.log(userKey);
// }

Object.defineProperty(
    user,
    'id',
    {
        value: 1,
        writable: false, //можно ли изменять (по умолчанию - true)
        enumerable: false, // можно ли итеровать (по умолчанию - true)
        configurable: false, // можно ли при следующем вызове Object.defineProperty изменять настройки поля (по умолчанию - true)
    }
)
console.log(user);
user.id = 100;
console.log(user);

for (let userKey in user) {
    console.log(userKey);
}
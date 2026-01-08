//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


const objectPrinter = (users) => {
    document.write(`<div>`)
    for (const user of users) {
        document.write (`<div>UserID: ${user.id}, User Name: ${user.name}, User Age: ${user.age}</div>`);
    }
    document.write(`</div>`)
}
let users = [
    {id: 1, name: 'John', age: 33},
    {id: 2, name: 'Mary', age: 18},
    {id: 3, name: 'Ester', age: 30},
    {id: 4, name: 'Marshal', age: 25},
];

objectPrinter(users);

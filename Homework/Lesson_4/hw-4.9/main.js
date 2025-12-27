function objectPrinter(users) {
    document.write(`<div>`)
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
    document.write(`</div>`)
}

let users = [
    {id: 1, name: 'John', age: 33},
    {id: 2, name: 'Mary', age: 18},
    {id: 3, name: 'Ester', age: 30},
    {id: 4, name: 'Marshal', age: 25},
]

objectPrinter(users);


let users = [
    {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 30, status: true},
    {skills: ['html', 'js'], id: 2, name: 'petya', age: 34, status: false},
    {skills: ['html', 'js'], id: 3, name: 'anna', age: 28, status: true},
    {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 25, status: false}
];
console.log(users);
console.log(users[0]);
console.log(users[1].age);
console.log(users[2]['age']);

let user0 = users[0]; //лучше делать так
console.log(user0.name);

console.log(user0.skills);
console.log(user0.skills[2]);

let user1 = users[1]
let skills = user1['skills'];
console.log(skills[1]);

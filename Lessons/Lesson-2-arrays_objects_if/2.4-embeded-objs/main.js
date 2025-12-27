let user1 = {
    id: 1,
    name: "John",
    age: 30,
    skills: ['html', 'js', 'java'],
    wife: {
        name: 'Anna',
        age: 29
    }
}

console.log(user1.id);
console.log(user1 ['age']);
console.log(user1.skills[2]);

console.log(user1.wife);
console.log(user1.wife.name);
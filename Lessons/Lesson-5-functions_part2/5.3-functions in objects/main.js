let user = {
    name: 'John',
    age: 32,
    greeting: function (msg) {
        return `${msg} my name is ${this.name}`
    },
    vitannia: (msg)=> `${msg} my age is ${user.age}`
}
console.log(user.greeting('hi'));
console.log(user.vitannia('hello'));
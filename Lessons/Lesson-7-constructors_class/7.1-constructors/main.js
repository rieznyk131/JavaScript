// function User (name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//
//     console.log(this);
// }
//
// let user1 = new User("John", 25, true);
// let user2 = new User("Marry", 35, false);

// function User (name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
//
//     console.log(this);
// }
// let user1 = new User("John", 25, true, {name: 'Joanna', age: 25, status: true});

function User (name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
    this.greeting = function () {
        console.log('hi');
    }

    console.log(this);
}
let user1 = new User("John", 25, true, 'Anna', 25);
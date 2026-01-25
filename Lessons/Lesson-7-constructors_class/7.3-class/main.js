// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

    // static greeting() {
    //     console.log(this);
    //     console.log(this.age);
    //     return `Hello my name is ${this.name}`;
    // }

//      work() {
//         return `work in process`;
//     }
// }

// let user = new User('John', 25);
// console.log(user);
// console.log(User.greeting());

// class Customer extends User {
//
//
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
//     work (){
//         return super.work()
//     }
// }
//
// let john = new Customer('John', 25, 'qwerty12345');
// console.log(john);
// console.log(john.work());

function User(name, age) {
    this.name = name;
    this.age = age;
}

function Customer (name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}

let customer = new Customer("John", 25, 'qwerty');
console.log(customer);
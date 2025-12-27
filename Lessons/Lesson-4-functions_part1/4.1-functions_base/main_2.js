//    let user1 = {
//        id: 1,
//        name: 'kokos',
//        age: 123,
//        status: true
//    }
//    let user2 = {
//        id: 2,
//        name: 'abrikos',
//        age: 234,
//        status: false
//    }
//    let user3 = {
//        id: 3,
//        name: 'tomat',
//        age: 345,
//        status: true
//    }
//    let user4 = {
//        id: 4,
//        name: 'ogirok',
//        age: 456,
//        status: false
//    }

function userFactory (id, name, age, status) {

    let user = {
       id: id,
       name: name,
       age: age,
       status: status
    }
    return user;
}

let u1 = userFactory(1, 'kokos', 12, true);
let u2 = userFactory(2, 'abrikos', 11, false);
let u3 = userFactory(3, 'tomato', 2, true);
let u4 = userFactory(4, 'cucumber', 45, false);
console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);
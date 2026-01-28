let base = {
    id: 1,
    name: "John",
    age: 25
}

let copy = Object.create(base);
copy.surname = 'Snow';

console.log(base);
console.log(copy);
console.log(copy.id); //1
console.log(copy.name);//John
console.log(copy.age); //25
console.log(copy.hasOwnProperty('id'));//false
console.log(copy.hasOwnProperty('surname')); //true
copy.id = 100500;
console.log(copy.hasOwnProperty('id')); //true

let obj = {};
obj.__proto__ = base;
console.log(obj);
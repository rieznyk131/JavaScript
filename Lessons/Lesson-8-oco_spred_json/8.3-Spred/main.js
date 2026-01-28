let user = {
    name: 'John',
    surname: "Smith",
    age: 32,
}

let userCopy = {...user};
console.log(userCopy);
userCopy.surname = "Snow";
console.log(userCopy);
console.log(user);

console.log(user === userCopy); //false

//при таком способе копирования мы создаем новый объект и изменения в нем не затронут оригинальный объект

let arr = [11, 22, 33];

let arrCopy = [...arr];
console.log(arrCopy);

arrCopy[0] = 10;
console.log(arrCopy);
console.log(arr);

console.log(arr === arrCopy); //false
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 32,
    skills: ['Javascript', 'React', 'Redux']
};

let userClone = {...user};
console.log(userClone);
console.log(userClone === user); //false
console.log(user.skills === userClone.skills); //true


//для того, чтобы вложеные ссылочные элементы так же сохранялись в разные ячейки памяти:

let userJsonClone  = JSON.stringify(user); // конверстирует в формат JSON, в строку
console.log(userJsonClone );

let userCloneParse = JSON.parse(userJsonClone); //конвертирует обратно в JS, object
console.log(userCloneParse);

console.log(userCloneParse === user);//false
console.log(userCloneParse.skills === user.skills);//false

//методом с JSON не удастся скопировать функции из оригинального объекта




//метод Object.assign не позволяет копировать вложенные ссылочные элементы
let assign = Object.assign({}, user);
console.log(assign);
console.log(assign === user); //false
console.log(assign.skills === user.skills); //true

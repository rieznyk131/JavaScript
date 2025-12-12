let n = 100;
let s = 'asd';
let b = true;

console.log(typeof n);
console.log(typeof s);
console.log(typeof b);

let x;
console.log(typeof x); //если не указать данные в переменной, в консоли вернет значение "undefined".
console.log(typeof undefined);
console.log(typeof null); //в консоли вернет значение "object"
console.log(typeof NaN); //not a number

//все значения, которые являют собой "ничто", приводятся булевыми операторами к false:
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!'');

//если 0 - это стринга или в стринге есть пробел - такие данные будете приводится булевыми операторами к true:
 console.log(!!'0');
 console.log(!!' ');
//– Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

let str1 = 'hello world';
console.log(str1.length); //11

let str2 = 'lorem ipsum';
console.log(str2.length); //11

let str3 = 'javascript is cool';
console.log(str3.length); //18



let arr = [str1, str2, str3];

for (let item of arr) {
    console.log(item.length);
}
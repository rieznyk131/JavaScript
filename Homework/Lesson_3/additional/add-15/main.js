// let arr = [];

// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// for (let i = 1; i < 10; i++) {
//     arr.push(i);
// }
// console.log(arr);
//
// for (let i = 1; i < 10; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// let i = 1;
// while (i < 11) {
//     arr.push(i);
//
//     i++;
// }
// console.log(arr);
//
// let a = 1;
// while (a < arr.length) {
//
//     if (arr[a] % 2 === 0) {
//         console.log(arr[a]);
//     }
//
//     a++;
// }


// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let result = [];
//
// for (let i = 1; i < 11; i++) {
//     arr.push(i);
// }
// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);

// let i = 1;
//     while (i < 11) {
//         arr.push(i);
//
//         i++;
//     }
// console.log(arr);
//
// let a = 0;
//  while (a < arr.length) {
//      result[a] = arr[a];
//
//      a++;
//  }
//  console.log(result);

// – Дано масив: [ ‘a’, ‘b’, ‘c’]. За допомогою циклу for зібрати всі букви в слово.

let arr2 = ['a', 'b', 'c', 'd'];
let word = '';

for (let i = 0; i < arr2.length; i++) {
    word += arr2[i];
}
console.log(word);

// let words = ['Hello', 'world'];
// let resultString = '';
//
// for (let word of words) {
//     resultString += word + ' ';
// }
// console.log(resultString);

// let words = ['Hello', 'world'];
// let resultString = '';
//
// for (let i = 0; i < words.length; i++) {
//     resultString += words[i];
//
//     if (i < words.length - 1) {
//         resultString += " ";
//     }
// }
// console.log(resultString);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

// let letters = ['a', 'b', 'c'];
// let resultString = '';
//
// let i = 0;
// while (i < letters.length) {
//     resultString += letters[i];
//
//     i++;
// }
// console.log(resultString);

// – Дано масив: [ ‘a’, ‘b’, ‘c’]. За допомогою циклу for of зібрати всі букви в слово.

// let arr2 = ['a', 'b', 'c', 'd'];
// let word = '';
//
// for (let i of arr2) {
//     word += i;
// }
// console.log(word);
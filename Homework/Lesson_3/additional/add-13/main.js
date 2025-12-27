//1. Створити пустий масив та :

let arr = [];

//        a. заповнити його 50 парними числами за допомоги циклу.

// let lenItems = 100;
// for (let i = 0; i < lenItems; i++) {
//     if (i % 2 == 0) {
//     arr.push(i)
//     }
// }
// console.log(arr);


// for (let i = 0; i < 50; i++) {
//     arr.push(i * 2);
// }
//
// console.log(arr);

// let i = 0;
//     while (i < 50) {
//         arr.push(i * 2);
//
//         i++
//     }
// console.log(arr);

//----------------------------------------------------------------------------------------

//        b. заповнити його 50 непарними числами за допомоги циклу.

// for (let i = 0; i < 50; i++) {
//
//         arr.push(i * 2 + 1);
//
// }
//     console.log(arr);

// let i = 0;
//     while (i < 50) {
//
//         arr.push(i * 2 +1);
//
//         i++
//     }
//     console.log(arr);

//------------------------------------------------------------------------------------------

//        c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//    arr.push(Math.floor(Math.random() * 21)) ;
// }
// console.log(arr);

// let i = 0;
//     while (i < 20) {
//
//         arr.push(Math.floor(Math.random() * 21));
//
//         i++;
//
//     }
//     console.log(arr);

//--------------------------------------------------------------------------------------------

//        d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * (732 - 8) + 8));
// }
// console.log(arr);

// let i = 0;
//     while (i < 20) {
//         arr.push (Math.floor(Math.random() * (732 - 8) + 8));
//
//         i++;
//     }
// console.log(arr);

//----------------------------------------------------------------------------------------------

//  2. Вивести за допомогою console.log кожен третій елемент

// for (let i = 0; i < 20; i++) {
//     arr.push(i);
// }
//
// for (let i = 2; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }

// let i = 0;
//     while (i < 20) {
//
//         arr.push(i);
//
//         i++;
//     }
// // console.log(arr);
//
// let a = 2;
// while (a < arr.length) {
//     console.log(arr[a]);
//     a += 3;
// }

//--------------------------------------------------------------------------------------------

//  3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.

// for (let i = 0; i < 20; i++) {
//     arr.push(i);
// }
//
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//     }
// }

// let i = 0;
//     while (i < 20) {
//
//         arr.push(i);
//
//         i++;
//     }
// // console.log(arr);
//
// let a = 2;
// while (a < arr.length) {
//     if (arr[a] % 2 === 0) {
//     console.log(arr[a]);
//     }
//     a += 3;
// }

//--------------------------------------------------------------------------------------------

//  4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

// let result = [];
//
// for (let i = 0; i < 20; i++) {
//     arr.push(i);
// }
// console.log(arr);
//
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//     result.push(arr[i]);
//     }
// }
// console.log(result);

// let i = 0;
//     while (i < 20) {
//         arr.push(i);
//
//         i++;
//     }
//     console.log(arr);
//
// let i2 = 2;
//     while (i2 < 20) {
//         if (arr[i2] % 2 === 0) {
//             result.push(i2);
//         }
//         i2 += 3;
//     }
// console.log(result);

//---------------------------------------------------------------------------------------------

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

 // let arr2 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 ===0) {
//         console.log(arr2[i - 1]);
//     }
// }

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i + 1] % 2 === 0) {
//         console.log(arr2[i]);
//     }
// }
//
// let i = 0;
//     while (i < arr2.length) {
//
//         if (arr2[i + 1] % 2 === 0) {
//             console.log(arr2[i]);
//         }
//
//         i++;
//     }

//---------------------------------------------------

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let bill = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
//
// // for (let i = 0; i < bill.length; i++) {
// //     sum += bill[i];
// //
// // }
// //
// // let average = sum / bill.length;
// // console.log(average);
//
// // let i = 0;
// //
// // while (i < bill.length) {
// //
// //     sum += bill[i];
// //
// //     i++;
// // }
// //
// // let average = sum / bill.length;
// // console.log(average);
//
// for (let price of bill) {
//     sum += price;
//
// }
// let average = sum / bill.length;
// console.log(average);

//------------------------------------------------------------------------

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив
// let result = [];

// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 11));
// }
// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] *= 5);
// }
// console.log(result);

// let i = 0;
//     while (i < 10) {
//         arr.push(Math.floor(Math.random() * 21));
//
//         i++;
//     }
//     console.log(arr);
//
// let a = 0;
//     while (a < arr.length) {
//         result.push(arr[a] *= 5);
//
//         a++;
//     }
//     console.log(result);

//---------------------------------------------------------------------------

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

// let mixedArray = [
//     "Hello",
//     42,
//     true,
//     "JavaScript",
//     7,
//     false,
//     "World",
//     23,
//     true,
//     "OpenAI",
//     52,
//     false
// ];
// console.log(mixedArray);

// let numbers = [];


// for (let i = 0; i < mixedArray.length; i++) {
//     if (typeof mixedArray[i] === "number") {
//         numbers.push(mixedArray[i]);
//     }
// }
// console.log(numbers);

// let i = 0;
//     while (i < mixedArray.length) {
//         if (typeof mixedArray[i] === "number") {
//             numbers.push(mixedArray[i]);
//         }
//         i++;
//     }
// console.log(numbers);

// for (let a of mixedArray) {
//     if (typeof a === "number") {
//         numbers.push(a);
//     }
// }
// console.log(numbers);
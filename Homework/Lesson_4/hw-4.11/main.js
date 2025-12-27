// function sum(arr) {
//     let sumNum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumNum += arr[i];
//     }
//     return sumNum;
// }
//
// console.log(sum([1, 3, 10]))

function sum(arr) {
    let sumNum = 0;
    for (const item of arr) {
        sumNum += item;
    }
    return sumNum;
}

console.log(sum([1, 3, 9]));
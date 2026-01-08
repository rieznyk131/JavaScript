// function iterator (arr, i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         iterator(arr, i);
//     }
// }
//
// iterator ([11, 22, 33], 0)
//
let arr = [11, 22, 33, [44, 55]];
let innerArr= [];

function flatter(arr){
    for (const item of arr){
        if (Array.isArray(item)){
            flatter(item);

        } else {
            innerArr.push(item);
        }
    }
}

flatter(arr);
console.log(innerArr);

// function countDown(n) {
//     console.log(n);
//
//     if (n === 0) {
//         return 0;
//     }
//     else {
//         return countDown(n - 1);
//     }
// }
// countDown(50);


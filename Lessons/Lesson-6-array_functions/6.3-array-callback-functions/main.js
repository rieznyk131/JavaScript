// function calc (a, b, callback) {
//     return callback(a, b);
// }
// function callback (a, b) {
//     return a * b;
// }
//
// console.log(calc(10, 20, callback));

function calc(a, b, callback) {
    return callback(a, b)
}

console.log(calc(20, 30, (a, b) => {
    return a + b
}));
console.log(calc(20, 30, (a, b) => {
    return a - b
}));
console.log(calc(20, 30, (a, b) => {
    return a * b
}));
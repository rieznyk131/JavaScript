// function minNumber(numbers) {
//     const minNum = Math.min (...numbers);
//     console.log(minNum)
// }
//
// let arr = [11, 25, 45, 1, 56, 458, 669, 21];
//
// minNumber(arr);

function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];

        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinValue([1, 10, 25, 665, -56, 2]))



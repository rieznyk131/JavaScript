//- створити функцію яка повертає найменьше число з масиву

const minNumOffArray = (numbers) => {
    let minNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let item = numbers[i];

        if (item < minNum) {
            minNum = item;
        }
    }
    return minNum;
}

console.log(minNumOffArray([1, 2, 3, 4, 5, 6]));

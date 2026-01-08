//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = array => {
    let sumNum = 0;
    for (let item of array) {
        sumNum += item;
    }
    return sumNum;
}
console.log(sum([1, 2, 3, 4, 5]));
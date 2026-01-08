//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (array, index1, index2) => {
    if (index1 < array.length && index2 < array.length) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;

        return array;

    }
   return 'error';
}
console.log(swap([11, 22, 33, 44], 0, 1));

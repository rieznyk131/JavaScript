let arr = []
console.log(Array.isArray(arr)); //проверяет является ли элемент массивом.

// arr[i] = 100 //добавление элемента в указанный индекс массива

console.log(arr.push('new element 1')); //добавление элемента в массив
console.log(arr.push('new element 2'));
console.log(arr.push('new element 3'));
console.log(arr.push('new element 4'));
console.log(arr.push('new element 5'));

console.log(arr);

console.log(arr.pop()); //удалит последний элемент
console.log(arr);

arr.unshift('!!'); //добавляет элемент в начало
console.log(arr)

console.log(arr.shift()); //удаляет первый элемент
console.log(arr);

let join = arr.join('; '); //объединяет элементы массива и выводит их строкой. в Параметр можно передать разделитель (; : - и т.д).
console.log(join);

let nums = [1, 2, 3, 4, 5];

let concat = arr.concat(nums) // объединяет 2 массива в 1. вначале пишем тот массив, элементы которого мы ходим поставить в начала, в параметре указываем второй массив.
console.log(concat)

let slice = concat.slice(0, 4); //обрежет массив по заданным индексам, что указаны в параметрах (конечный индекс не обрежется, т.е. останутся элементы 0, 1, 2, 3)
console.log(slice);

let splice = concat.splice(0, 3, 'ololo', 'kek', 'opopop'); //из указанного индекса в первом параметре удаляется элементы, кол-во которых указано во втором параметре. Удленные элементы сохранятся в новом массиве (у нас - splice[]). Добавленніе параметрі после второго (3, 4 и т.д) будут заменять собой удаленные элементы)
console.log(splice);
console.log(concat); // -3 элемента с 0 индекса, + 3 элемента на их место

concat.splice(concat.indexOf(2), 1); //определяем через .indexOf индекс элемента, который ходим удалить, указываем кол-во элементов, которые хотим удалить, начиная с него.
console.log(concat);
console.log(concat.includes(2)); //проверяет вхождение в массив указанного в параметрах элемента.

console.log(arr);

arr.forEach((item, index, array) => {console.log(`${item} has index ${index} in arr`);}) // Метод arr.forEach позволяет запускать функцию для каждого элемента массива.









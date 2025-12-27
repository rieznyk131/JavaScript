// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 'qwerty';
arr[4] = 'asdf';
arr[5] = 'zxcv';
arr[6] = true;
arr[7] = false;
arr[8] = {
            id: 1,
            name: 'John',
            surname: 'Smith'
        };
arr[9] = [
            2, 3, 4, 'hello', true
        ];

// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
// }

let i =0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
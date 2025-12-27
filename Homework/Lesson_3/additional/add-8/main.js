//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr = ['a', 'b', 'c', 1, 2, 3, 4, 5, true, false];

let i = 0;
    while (i < arr.length) {
        if (typeof arr[i] === 'number') {
            console.log(arr[i]);
        }
        i++;
    }

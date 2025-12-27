//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr = ['a', 'b', 'c', 1, 2, 3, 4, 5, true, false];

let i = 0;
    while (i < arr.length) {
        if (typeof arr[i] === 'string') {
            console.log(arr[i]);
        }
        i++;
    }
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr = ['a', 'b', 'c', 1, 2, 3, 4, 5, true, false];

// for (let i = 0; i < arr.length; i++)
// {
//     if (typeof arr[i] === "boolean")
//     {
//         console.log(arr[i]);
//     }
// }

for (let a of arr)
{
    if (typeof a === "boolean")
    {
        console.log(a);
    }
}
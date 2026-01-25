let set = new Set();
set.add('qwerty');
set.add('qwerty');
set.add('qwertyASSD');
set.add('qwertyASSddD');
set.add('qwertyASSddD');
set.add('qwertyASSddfffD');

console.log(set);

console.log(set.has('qwerty')); //true

console.log(set.size); //4

set.delete('qwerty');
console.log(set.has('qwerty')); //false


set.forEach(value => console.log(value));

let arrayFromSet = Array.from(set);
console.log(arrayFromSet);


//одной из задач сета может быть удалить повторяющиеся значения из массива.
//Пример:

let set2 = new Set([11, 22, 33, 44, 55, 66, 66, 77, 55, 99, 100, 88, 99]);
console.log(set2);

let unicNumbers = Array.from(set2);
console.log(unicNumbers);


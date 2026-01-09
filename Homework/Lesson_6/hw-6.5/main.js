//– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

function strToArray(str) {
    if (str) {
        let arr = str.split(' ');
        return arr;
    }
    return [''];
}
console.log(strToArray('Ревуть воли як ясла повні'));
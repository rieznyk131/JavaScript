// let color = 'green';
// if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('go');
// }

// let age = +prompt('enter your age');
// if (age >= 18) {
//     console.log('adult');
// } else {
//     console.log('cartoon');
// }

// let color = prompt("enter color");
// if (color === 'green') {
//     console.log('go');
//     if (confirm("is road clear?")) {
//         console.log('go');
//     } else {
//         console.log('wait');
//     }
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('error');
// }

// let color = prompt("enter color");
// let isRoadClear = confirm('is road clear?');
// if (color === 'green' && isRoadClear) {
//     console.log('go');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('error');
// }

let language = prompt('ru/en')
let color = prompt("enter color");
let isRoadClear = confirm('is road clear?');
if (color === 'green' && isRoadClear) {
    language  === 'ru' ? console.log('вперед') : console.log('go');

} else if (color === 'yellow') {
    console.log('wait');
} else if (color === 'red') {
    console.log('stop');
} else {
    console.log('error');
}
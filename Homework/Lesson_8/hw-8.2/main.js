// function cloner(object) {
//     if(object) {
//         let functions = [];
//         for (let key in object) {
//             if (typeof object[key] === 'function') {
//                 const functionClone = object[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObject = JSON.parse(JSON.stringify(object));
//         for (let func of functions) {
//             cloneObject[func.key] = func.functionClone;
//         }
//         console.log(cloneObject);
//         return cloneObject
//
//     }
//     throw new Error('!!!!');
// }

function structuredCloner (obj) {
    if (obj === null || obj === undefined || Number.isNaN(obj)) {
        throw new Error('Error');
    }
    const functions = {};

    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            functions[key] = obj[key].bind({});
        }
    }
    const pureData = {};

    for (const key in obj) {
        if (typeof obj[key] !== 'function') {
            pureData[key] = obj[key];
        }
    }

    const cloneObject = structuredClone(pureData);

    for (const key in functions) {
        cloneObject[key] = functions[key];
    }
    return cloneObject
}



let person = {
    id: 1,
    name: "John",
    surname: "Snow",
    relatives: [
        {name: 'ned',
        surname: 'stark',
        kinship: 'uncle'
        },
        {name: 'liana',
        surname: 'stark',
        kinship: 'mother'
        },
        {name: 'daenerys',
        surname: 'targaryen',
        kinship: 'aunt'
        },
        {name: 'rhaegar',
        surname: 'targaryen',
        kinship: 'father'}
    ],
    sayHello: function() {
        console.log(`hi, my name is ${person.name}`);
    },
    sayGoodBye: function() {
        console.log(`See you later`);
    }
}


let clone = structuredCloner(person);
console.log(clone);
//
// let clone = cloner(person)
// clone.sayHello();
// clone.sayGoodBye();

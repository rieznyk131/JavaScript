//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const listFromArrayPrinter = (array) => {
    document.write('<ul>')
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>')
}
listFromArrayPrinter([11, 22, 'hello', true, false, 44, 'world']);
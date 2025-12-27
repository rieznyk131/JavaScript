function stringPrinter(arrayOfPrimitives) {
    document.write(`<ul>`);
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

stringPrinter([11, 33, 'lorem ipsum', true, false]);
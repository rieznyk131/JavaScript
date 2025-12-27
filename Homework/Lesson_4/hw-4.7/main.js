function listPrinter(text, counter) {

    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);

}

listPrinter('lorem ipsum', 20)
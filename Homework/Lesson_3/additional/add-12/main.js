const books = [
    {
        title: "1984",
        pages: 328,
        author: "Джордж Орвелл",
        genres: ["Антиутопія", "Політичний роман"],
        price: 15
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        pages: 309,
        author: "Джоан Роулінг",
        genres: ["Фентезі", "Пригоди"],
        price: 12
    },
    {
        title: "Дюна",
        pages: 412,
        author: "Френк Герберт",
        genres: ["Наукова фантастика", "Пригоди"],
        price: 18
    },
    {
        title: "Good Omens",
        pages: 432,
        authors: ["Neil Gaiman", "Terry Pratchett"],
        genres: ["Фентезі", "Комедія"],
        price: 20
    },
    {
        title: "The Three-Body Problem",
        pages: 400,
        authors: ["Cixin Liu", "Ken Liu", "John Doe"],
        genres: ["Наукова фантастика", "Трилер"],
        price: 22
    },
    {
        title: "The Hobbit",
        pages: 310,
        author: "J.R.R. Tolkien",
        genres: ["Фентезі", "Пригоди", "Казка"],
        price: 14
    },
    {
        title: "The Lord of the Rings",
        pages: 1178,
        author: "J.R.R. Tolkien",
        genres: ["Фентезі", "Пригоди", "Епос", "Класика"],
        price: 35
    }
];

//Найбільші

// let biggestBook = books[0];
// for (let i = 1; i < books.length; i++) {
//     if (books[i].pages > biggestBook.pages) {
//         biggestBook = books[i];
//     }
// }
// console.log("Найбільша книга:", biggestBook.title, "-", biggestBook.pages, "сторінок");

// let biggestBook = books[0];
// for (book of books) {
//     if (book.pages > biggestBook.pages) {
//         biggestBook = book
//     }
// }
// console.log("Найбільша книга:", biggestBook.title, "-", biggestBook.pages, "сторінок");


//Найдорожчі

// let expensiveBook = books[0]
// for (let i = 1; i <books.length; i++) {
//     if(books[i].price > expensiveBook.price) {
//         expensiveBook = books[i]
//     }
// }
// console.log('Найдорожча книга', '-', expensiveBook.title,',', expensiveBook.price)

// let expensiveBook = books[0]
//     for (book of books) {
//         if(book.price > expensiveBook.price) {
//             expensiveBook = book
//         }
//     }
// console.log('Найдорожча книга', '-', expensiveBook.title,',', expensiveBook.price)


//Найдовша назва

// let longestTitle = books[0];
//     for (let i = 1; i < books.length; i++) {
//         if (books[i].title.length > longestTitle.title.length) {
//             longestTitle = books[i]
//         }
//     }
// console.log('Book with the longest title', '-', longestTitle.title, '-',longestTitle.title.length );

// let longestTitle = books[0];
// for (book of books) {
//     if (book.title.length > longestTitle.title.length) {
//         longestTitle = book
//     }
// }
// console.log('Book with the longest title', '-', longestTitle.title, '-',longestTitle.title.length );

//Книжки які писали 2 автори

// for (let i = 0; i < books.length; i++) {
//     if (Array.isArray(books[i].authors) && books[i].authors.length === 2) {
//         console.log(books[i].title, '-', books[i].authors);
//     }
// }

// for (const book of books) {
//     if(Array.isArray(book.authors) && book.authors.length === 2){
//         console.log(book.title, '-', book.authors);
//     }
// }


//Книжки які писав 1 автор

// for (let i = 0; i < books.length; i++) {
//     if (books[i].author && typeof books[i].author  === "string") {
//         console.log(books[i].title, '-', books[i].author);
//     }
// }

// for (const book of books) {
//     if (book.author && typeof book.author === "string") {
//         console.log(book.title, '-', book.author);
//     }
// }


//Книжки з найбільшою кількістю жанрів

// let mostGenres = books[0]
// for (i = 1; i < books.length; i++) {
//     if (Array.isArray(books[i].genres) && books[i].genres.length > mostGenres.genres.length) {
//         mostGenres = books[i];
//     }
// }
// console.log(mostGenres.title, '-', mostGenres.genres, '-', mostGenres.genres.length )

let mostGenres = books[0]
for (const book of books) {
    if (Array.isArray(book.genres) && book.genres.length > mostGenres.genres.length) {
        mostGenres = book;
    }
}
console.log(mostGenres.title, '-', mostGenres.genres, '-', mostGenres.genres.length )
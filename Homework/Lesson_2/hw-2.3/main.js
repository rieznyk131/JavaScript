let book1 = {
    title:'Good Omens',
    pageCount: 384,
    genre: 'Urban Fantasy',
    authors: [
        {
            name:'Terry Pratchet',
            age: 66
        },
        {
            name:'Neil Gaiman',
            age: 65
        }
    ]
}
let book2 = {
    title:'The Talisman',
    pageCount: 646,
    genre: 'Dark fantasy',
    authors: [
        {
            name:'Stephen King',
            age: 78
        },
        {
            name:'Peter Francis Straub',
            age: 79
        }
    ]
}
let book3 = {
    title:'The Gilded Age: A Tale of Today',
    pageCount: 630,
    genre: 'political fiction',
    authors: [
        {
            name:'Mark Twain',
            age: 74
        },
        {
            name:'Charles Dudley Warner',
            age: 71
        }
    ]
}

console.log(book3);
console.log(book3.authors[0].age);

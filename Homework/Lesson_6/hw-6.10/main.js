// описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }


const suits = [
    { name: 'spade', color: 'black' },
    { name: 'clubs', color: 'black' },
    { name: 'diamond', color: 'red' },
    { name: 'heart', color: 'red' }
];

const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit.name,
            value: value,
            color: suit.color,
        })
    }
}
console.log(deck);

let aceOfSpade = deck.find(card =>
    card.value === 'ace' &&
    card.cardSuit === 'spade'
)
console.log(aceOfSpade)

let filteredSix = deck.filter(card => card.value === "6");
console.log(filteredSix);

let filteredReds = deck.filter(card => card.color === "red");
console.log(filteredReds);

let filteredClubs = deck.filter(card => card.cardSuit === "clubs" && (
card.value === "9" || card.value.length > 1) )

console.log(filteredClubs);









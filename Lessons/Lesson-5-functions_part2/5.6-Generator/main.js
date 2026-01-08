function* cardsHolder (){
    const cards = [
        {value: 6, suite: 'diamond'},
        {value: 7, suite: 'spade'},
        {value: 8, suite: 'diamond'},
        {value: 9, suite: 'spade'}
    ];
    for (const card of cards) {
        yield card;
    }
}

cardsHolderGenerator = cardsHolder();
const card1 = cardsHolderGenerator.next();
console.log(card1.value);



const card2 = cardsHolderGenerator.next();
console.log(card2.value);



const card3 = cardsHolderGenerator.next();
console.log(card3.value);

const card3Data = cardsHolderGenerator.next().value;
console.log(card3Data);
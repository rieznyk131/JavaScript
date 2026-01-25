class Cinderella {
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}

let cinderellas = [
    new Cinderella('Marry', 21, 39),
    new Cinderella('Anna', 19, 36),
    new Cinderella('Sophie', 22, 37),
    new Cinderella('Emily', 20, 37),
    new Cinderella('Kate', 23, 38),
    new Cinderella('Lily', 18, 37),
    new Cinderella('Olivia', 24, 39),
    new Cinderella('Emma', 21, 36),
    new Cinderella('Nina', 25, 40),
    new Cinderella('Lucy', 19, 35)
]
console.log(cinderellas);

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Valera', 25, 35);
console.log(prince);

for (let cinderella of cinderellas) {
    if (cinderella.feetSize === prince.shoeSize) {
        console.log(cinderella);
    }
}

let cinderella = cinderellas.find(cinderellas => cinderellas.feetSize === prince.shoeSize);
console.log(cinderella);
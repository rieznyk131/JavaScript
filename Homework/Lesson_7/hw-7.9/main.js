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
    new Cinderella('Kate', 16, 38),
    new Cinderella('Lily', 18, 37),
    new Cinderella('Olivia', 24, 39),
    new Cinderella('Emma', 17, 36),
    new Cinderella('Nina', 15, 40),
    new Cinderella('Lucy', 19, 35)
]

Cinderella.prototype.printInfo = function () {
    console.log(this.name, this.age, this.feetSize);
}


cinderellas.forEach(cinderella => {cinderella.printInfo();});

Cinderella.prototype.ageFilter = function (age) {
    if (this.age >=  age) {
        console.log(this);
    }
}

cinderellas.filter(cinderella => {cinderella.ageFilter(18)})

Cinderella.prototype.feetAndAgeFilter = function (minAge, maxFeetSize) {
    if (this.age >= minAge && this.feetSize < maxFeetSize) {
        console.log(this);
    }
}

cinderellas.filter(cinderella => {cinderella.feetAndAgeFilter(18, 37)})

Cinderella.prototype.sortByFeetSize = function (array) {
    return array.sort((a, b) => a.feetSize - b.feetSize);
}

const helper = new Cinderella();
const sortedCinderellas = helper.sortByFeetSize(cinderellas);

console.log(sortedCinderellas);

Cinderella.prototype.sortByName = function (array) {
    return array.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        if (a.name === b.name) {
            return 0;
        }
    });
}

const helper2 = new Cinderella();
const sortedByNames = helper2.sortByName(cinderellas);
console.log(sortedByNames);
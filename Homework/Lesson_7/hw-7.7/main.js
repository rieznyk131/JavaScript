class Car {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume
    }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
        };
        info() {
            for (let key in this) {
                console.log(key, this[key]);
            }
        }
        increaseMaxSpeed(speedToAdd) {
            if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
        }
        changeYear(newYear) {
            if (newYear > 1815) this.year = newYear;
        }
        addDriver(driver) {
            if (driver) this.driver = driver;
        }
}

let car = new Car('punto', 'fiat', 2008, 200, 1.3);
console.log(car);

car.drive();
car.increaseMaxSpeed(100);
console.log(car);
car.changeYear(2010);
console.log(car);
car.addDriver({name: 'Vasya', surname: 'Petrov', city: 'Kharkiv'});
console.log(car);
car.info();
function cylinderSquare(radius, height) {
    return 2 * Math.PI * radius * (radius + height)
}

let cylinder1 = cylinderSquare(5, 3);
console.log(cylinder1);
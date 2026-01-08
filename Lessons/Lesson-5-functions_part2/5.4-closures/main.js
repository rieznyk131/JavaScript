function userBuilder (name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        },
    }
}
let builder = userBuilder('John', 32);

console.log(builder);
console.log(builder.getName());
console.log(builder.getAge());
builder.setAge(51);
console.log(builder.getAge());





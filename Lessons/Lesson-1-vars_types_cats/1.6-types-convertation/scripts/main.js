//String

console.log(typeof (100500 + '')); //конвертирует число в строку
console.log(100 + 200 + ''); //сложит числа, результат будет трингой
console.log('' + 100 + 200); //сложит числа как стрингу (будет 100200)

//Numbers

console.log(+"100500"); //конвертирует стрингу в число
console.log(parseInt('100500asd')); // конвертирует стрингу в число, обрезая символы, которые не являются числовыми значениями.
console.log(parseFloat('100500.123asd')); // конвертирует стрингу в число, обрезая символы, которые не являются числовыми значениями + оставляет числа после запятой

//Boolean

console.log(!!100); //true
console.log(!!0); //false
console.log(!!'asd'); //true
console.log(!!''); //false
console.log(!!'0'); //true

//Boolean to string/number
console.log(true + '');
console.log(+true); //кастуется в 1
console.log(+false); // кастуется в 0

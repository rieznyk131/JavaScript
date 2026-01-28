let target= document.getElementById('target');
console.log(target.innerText);

// target.innerText = 'Hello World'; //Заменяет текст

target.style.backgroundColor = 'red'; //добавляет INLINE стили

console.log(target.classList); //получить классы элемента

target.classList.add('test'); //добавляет класс элементу
target.classList.add('bar'); //добавит еще один класс через пробел

console.log(target.classList.item(0)); //вытянет класс по индексу

console.log(target.classList.contains('bar')); //проверяет есть ли указанный класс у элемента, возвращает булевое значение;

console.log(target.classList.toggle('bar')); //если указанный класс есть, toggle его удалит, если класса не было, то она его добавит;

console.log(target.classList.toggle('foo')); //add class 'foo';

console.log(target.getAttribute('class')); //достает информацию про заданный атрибут элемента;

target.setAttribute('id', 'qwerty'); //заменяет в элемент заданные атрибуты. записывается в формате("тип атрибута (class, id и т.д)", "значение")
target.setAttribute('id', 'target');

console.log(target.previousElementSibling); //ищет предідущий єлемент
console.log(target.nextElementSibling); //ищет следующий єлемент

console.log(target.children); //находит все дочерние HTML элементы
console.log(target.childNodes); //находит узлы в элементе

// target.innerHTML = '<b>Hello World!</b>'; //можно записать новый текст с html тегами

console.log(target.outerHTML); //позволяет посмотреть как віглядит внешне html
console.log(target.innerHTML);


//если необходимо получить доступ к элементам из нескольких, обращаясь по классу, который не уникален:

// let divCollection = document.getElementsByClassName('point');
// console.log(divCollection);
//
// for (let div of divCollection) {
//     div.innerText = 'hello world!';
//     div.classList.add('asd');
// }
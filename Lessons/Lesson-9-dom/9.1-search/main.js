//DOM - document object model

// console.log(document);
// console.log(document.head);
// console.log(document.head.children);
// console.log(document.head.innerHTML);
//
// console.log(document.body);
// console.log(document.body.innerHTML);

//------------------------------------------------------------------------

//Поиск по документу

//1. По ID
let ul1 = document.getElementById('list-1');
console.log(ul1);

//2. По Class
let menuCollection = document.getElementsByClassName('menu');
console.log(menuCollection);

//При таком методе элементы выводятся в псевдомассиве. Чтобы вывести отдельно каждый элемент, необходимо их проитерирвоать:

for (let menuCollectionElement of menuCollection) {
    console.log(menuCollectionElement);
}

//3. По тегу
let ulList = document.getElementsByTagName('ul');
console.log(ulList);

let liList = document.getElementsByTagName('li');
console.log(liList);

//Чтоб достать вложеные теги в какой-то тег (li из первого ul):
let list1 = document.getElementById('list-1');
console.log(list1);

let list1LiCollection = list1.getElementsByTagName('li');
console.log(list1LiCollection);

//4. QuerySelector
console.log(document.querySelector('ul')); //Выведет первый указанный селектор, который попадется в документе

console.log(document.querySelectorAll('ul')); //Выведет все указанные селекторы, которые есть в документе

console.log(document.querySelectorAll('.menu:nth-child(2)>li'));
console.log(document.querySelectorAll('#list-1>li'));

let nodLiList1 = document.querySelectorAll('#list-1>li')


for (let node of nodLiList1) {
    console.log(node);
}

//– Є масив:
// [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts'];

let menu = document.createElement('ul');
menu.classList.add('menu');
document.body.appendChild(menu);
for (let item of arr) {

    let li = document.createElement('li');
    li.innerHTML = item;
    menu.appendChild(li);


}
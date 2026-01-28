//– створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

let elementDiv = document.createElement('div');
elementDiv.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa harum laboriosam laborum magnam natus non repudiandae sit temporibus. Aliquid eaque error esse iure modi quam quasi quidem sed suscipit voluptatibus.'
elementDiv.classList.add('wrap')
elementDiv.classList.add('collapse')
elementDiv.classList.add('alpha')
elementDiv.classList.add('beta')
elementDiv.style.backgroundColor = 'lightblue';
elementDiv.style.color = 'blueviolet';
elementDiv.style.fontSize = '18px';
elementDiv.style.paddingBottom = '10px';

let clone = elementDiv.cloneNode(true);
document.body.append(elementDiv, clone);


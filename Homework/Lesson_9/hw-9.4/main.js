//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (let course of coursesAndDurationArray) {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('item');

    let h2 = document.createElement('h2');
    h2.innerText ='Course:' + " " + course.title;
    h2.classList.add('heading');

    let p = document.createElement('p');
    p.innerText = 'Course Duration:' + ' ' + course.monthDuration + ' ' + 'month';
    p.classList.add('description');

    courseDiv.append(h2, p);

    document.body.appendChild(courseDiv);
}
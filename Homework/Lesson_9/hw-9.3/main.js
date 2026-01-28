//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
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

    let h3 = document.createElement('h3');
    h3.innerText ='Course:' + " " + course.title;
    let p = document.createElement('p');
    p.innerText = 'Course Duration:' + ' ' + course.monthDuration + ' ' + 'month';

    courseDiv.append(h3, p);

    document.body.appendChild(courseDiv);
}
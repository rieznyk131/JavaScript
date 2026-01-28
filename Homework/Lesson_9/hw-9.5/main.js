//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

for (let item of coursesArray) {
    let course = document.createElement('div');
    course.classList.add('course');


    let courseInfo = document.createElement('div');
    courseInfo.classList.add('course-info');

    let title = document.createElement('div');
    title.classList.add('title');
    let h2 = document.createElement('h2');
    h2.innerText = 'Title:' + ' ' + item.title;
    title.appendChild(h2);

    let durationInfo = document.createElement('div');
    durationInfo.classList.add('duration-info');

    let monthDuration = document.createElement('div');
    monthDuration.classList.add('month-duration');
    monthDuration.innerText = 'Month Duration:' + ' ' + item.monthDuration;
    let hourDuration = document.createElement('div');
    hourDuration.classList.add('hour-duration');
    hourDuration.innerText = 'Hour Duration:' + ' ' + item.hourDuration;

    durationInfo.append(monthDuration, hourDuration)

    courseInfo.append(title, durationInfo)

    let modules = document.createElement('div');
    modules.classList.add('modules');
    let modulesH3 = document.createElement('h3');
    modulesH3.innerText = 'Modules:';
    let modulesList = document.createElement('ul');
    modulesList.classList.add('modules-list');
    modules.append(modulesH3, modulesList);

for (let module of item.modules) {
let listItem = document.createElement('li');
    listItem.innerText = module;
    modulesList.appendChild(listItem);
}
    course.append(courseInfo, modules)
    wrapper.append(course);
}
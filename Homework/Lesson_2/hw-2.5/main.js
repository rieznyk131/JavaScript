// let weather = [
//     {
//         morningTemperature: +3,
//         dayTemperature: +15,
//         eveningTemperature: +10
//     },
//     {
//         morningTemperature: +4,
//         dayTemperature: +17,
//         eveningTemperature: +11
//     },
//     {
//         morningTemperature: +5,
//         dayTemperature: +19,
//         eveningTemperature: +13
//     },
//     {
//         morningTemperature: +7,
//         dayTemperature: +19,
//         eveningTemperature: +14
//     },
//     {
//         morningTemperature: +2,
//         dayTemperature: +14,
//         eveningTemperature: +8
//     },
//     {
//         morningTemperature: +3,
//         dayTemperature: +15,
//         eveningTemperature: +11
//     },
//     {
//         morningTemperature: +5,
//         dayTemperature: +17,
//         eveningTemperature: +11
//     }
// ]
// console.log(weather[1].dayTemperature);

// let day1 = {morningTemperature: -1, dayTemperature: 5, eveningTemperature: 0};
// let day2 = {morningTemperature: 0, dayTemperature: 8, eveningTemperature: 2};
// let day3 = {morningTemperature: 1, dayTemperature: 9, eveningTemperature: 3};
// let day4 = {morningTemperature: 2, dayTemperature: 10, eveningTemperature: 4};
// let day5 = {morningTemperature: -2, dayTemperature: 4, eveningTemperature: -4};
// let day6 = {morningTemperature: -3, dayTemperature: 3, eveningTemperature: -5};
// let day7 = {morningTemperature: 0, dayTemperature: 6, eveningTemperature: -1};
//
// let weather = [day1, day2, day3, day4, day5, day6, day7];
// console.log(weather[5].morningTemperature);

let temperatures = [
    {
        day: 'mon',
        temps: {
          morningTemp: 2,
          dayTemp: 10,
          eveningTemp: 4,
        }
    },
    {
        day: 'tue',
        temps: {
            morningTemp: 3,
            dayTemp: 11,
            eveningTemp: 5,
        }
    },
    {
        day: 'wed',
        temps: {
            morningTemp: 4,
            dayTemp: 12,
            eveningTemp: 6,
        }
    },
    {
        day: 'thu',
        temps: {
            morningTemp: 1,
            dayTemp: 9,
            eveningTemp: 0,
        }
    },
    {
        day: 'fri',
        temps: {
            morningTemp: 3,
            dayTemp: 10,
            eveningTemp: 2,
        }
    },
    {
        day: 'sat',
        temps: {
            morningTemp: 0,
            dayTemp: 8,
            eveningTemp: 1,
        }
    },
    {
        day: 'sun',
        temps: {
            morningTemp: -1,
            dayTemp: 5,
            eveningTemp: -2,
        }
    }
]
console.log(temperatures[2].temps.morningTemp)
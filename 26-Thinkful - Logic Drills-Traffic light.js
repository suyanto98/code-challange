// Code-challange
// 26 of 366 day
// https://www.codewars.com/kata/58649884a1659ed6cb000072/solutions/javascript

// function updateLight(current) { 
//     if(current == 'red') return 'green'
//     if(current == 'yellow') return 'red'
//     if(current == 'green') return 'yellow'
// }

// const updateLight = (current) => current == 'red' ? 'green' : current == 'yellow' ? 'red' : 'yellow'

// const rules = {
//     red : 'green',
//     yellow : 'red',
//     green : 'yellow'
// }

// function updateLight (current) {
//     return rules[current]
// }

const updateLight = (current) => ({
    red : 'green',
    yellow : 'red',
    green : 'yellow'
})[current]

console.log(updateLight("green")) //  "yellow"
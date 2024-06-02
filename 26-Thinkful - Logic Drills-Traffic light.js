// Code-challange
// 26 of 366 day
// 

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
// Code-challange
// 71 of 366 day
// 

// function printerError(s) {
//     const valid = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
//     let notValid = [];

//     for (let i = 0; i < s.length; i++) {
//         if(! valid.includes(s[i].toLowerCase())){
//             notValid.push(s[i])
//         }
//     }

//     return `${notValid.length}/${s.length}`
// }

// function printerError(s) {
//     const valid =  s.split('').filter((value, index) => !['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'].includes(value)).length
//     return `${valid}/${s.length}` 
// }

const printerError = (s) => (s.match(/[n-z]/g) || []).length + '/' + s.length

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm')); // "8/22"

// Code-challange
// 44 of 366 day
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript

// function abbrevName(name){
//     let result = '';
//     for (let i = 0; i < name.length; i++) {
//         i == 0 ? result += name[i] : ''
//         name[i] == ' ' ? result += '.' +name[i+1] : ''
//     }
//     return result
// }

const abbrevName = (name) => [...name].reduce((r, v, i) => {
    i == 0 ? r += name[i] : v == ' ' ? r += '.'+ name[i+1] : ''
    return r.toUpperCase()
}, '')

console.log(abbrevName("Sam harris"));
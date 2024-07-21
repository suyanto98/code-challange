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
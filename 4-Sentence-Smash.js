// Code-challange
// 4 of 366 day
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/solutions/javascript


// function smash (words) {
//     let result = ''
//     let spasi = '\n'
//     for(let i = 0; i <= words.length - 1; i++){
//         result += words[i] + `${i == words.length - 1 ? "" : spasi}`

//     }
//     return result
// };

// function smash (words) {
//     let result = ''
//     words.map((item ,index) => result += words[index] + `${index == words.length -1 ? '': ' '}` )
//     return result
// }

const smash = (words) => words.join(' ')

console.log(smash(["hello", "amazing", "world"]))
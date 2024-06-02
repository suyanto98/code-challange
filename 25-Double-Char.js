// Code-challange
// 23 of 366 day
//https://www.codewars.com/kata/56b1f01c247c01db92000076/solutions/javascript

// function doubleChar(str) {
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < 2; j++) {
//            result += str[i]
//         }
//     }

//     return result
// }

// function doubleChar(str) {
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//        result += str[i] 
//        result += str[i] 
//     }

//     return result
// }

const doubleChar = (str) => [...str].map((el) => el + el).join('')

console.log(doubleChar("abcd"), "aabbccdd")
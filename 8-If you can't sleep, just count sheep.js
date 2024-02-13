// Code-challange
// 8 of 366 day
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions/javascript

// var countSheep = function (num){
//     let result = ''
//     for (let i = 1; i <= num; i++) {
//         result += `${i} sheep...`
//     }
//     return result
// }

let countSheep = (num) => [...new Array(num)].map((el, i) => (i+1) + " sheep...").join('')

console.log(countSheep(3))
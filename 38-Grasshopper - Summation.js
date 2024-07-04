// Code-challange
// 38 of 366 day
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/javascript


// var summation = function (num) {
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result += i
//     }
//     return result
// }

const summation = (num) => Array(num).fill().map((v, i) => num - i ).reduce((val, cur)=> val + cur)

console.log(summation(2));
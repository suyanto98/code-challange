// Code-challange
// 30 of 366 day
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions/javascript

// function solution(str){
//     let result = ''
//     for (let i = str.length-1 ; i >= 0; i--) {
//         result += str[i]
//     }
//     return result;
// }

const solution = (str) => [...str].reverse().join('')

console.log(solution('world'));
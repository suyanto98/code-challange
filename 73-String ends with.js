// Code-challange
// 73 of 366 day
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript

// function solution(str, ending){
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[str.length - 1  - i] == ending[ending.length - 1 - i]){
//             result += 1
//         }
//     }
//     return result == ending.length ? true : false
// }

// function solution(str, ending){
//     let result = '';
//     for (let i = str.length - ending.length ; i < str.length; i++) {
//         result += str[i]
//     }
//     return result == ending
// }

const solution = (str, ending) => str.endsWith(ending)


console.log(solution('abcde', 'cde')); // true

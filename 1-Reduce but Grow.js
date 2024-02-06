// Code-challange 
// 1 of 366 day
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript


// Given a non-empty array of integers, return the result of multiplying the values together in order. 
// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let number = [1, 2, 3, 4]


// function grow(x){
//     let result = 1
//     for(let i = 0; i < x.length; i++){
//         result = x[i] * result
//     }
//     return result
// }

// function grow(x){
//     return x.reduce((acc, curr) => acc * curr ,1)
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr ,1)

console.log(grow(number))
// Code-challange
// 15 of 366 day
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript

// function sumArray(array) {
//     if(array == null || array.length <= 2) return 0
//     const newArray = array.sort((a, b) => a - b)
//     let result = 0
//     for (let i = 1; i < array.length - 1; i++) {
//         result += newArray[i]
//     }
//     return result
// }

const sumArray = (array) => array === null || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + cuur)

console.log(sumArray([ 3, 5 ]));

// Code-challange
// 79 of 366 day
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/solutions/javascript


// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(''), 2)
// };

// function binaryArrayToNumber (arr) {
//     let decimal = 0;
//     for (let i = 0; i < arr.length; i++) {
//         decimal = (decimal * 2) + arr[i]
//     }
//     return decimal
// }

const binaryArrayToNumber = (arr) => arr.reduce((prev, current) => (prev * 2) + current, 0)

console.log(binaryArrayToNumber([1, 1, 1, 1]));

// Code-challange
// 75 of 366 day
// https://www.codewars.com/kata/551f37452ff852b7bd000139/solutions/javascript


// function addBinary(a,b){
//     let number = a + b
//     let result = [];

//     while(number){
//         if(Number.isInteger(number / 2)){
//             number = number / 2
//             result.push('0')
//         } else {
//             number = Math.floor(number / 2)
//             result.push('1') 
//         }
//     }

//     return result.reverse().join('')
// }

const addBinary = (a,b) => (a+b).toString(2)

console.log(addBinary(5,9));


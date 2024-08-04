// Code-challange
// 47 of 366 day
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript

// function digitize(n) {
//     let num = n.toString()
//     let result = []
//     for (let i = num.length - 1 ; i >= 0 ; i--) {
//         result.push(Number(num[i]))
//     }
//     return result
// }


// function digitize(n) {
//     return String(n).split('').reverse().map((v) => (Number(v)))
// }

const digitize = (n) => String(n).split('').reverse().map((v) => (Number(v)))

console.log(digitize(35231)); //[1,3,2,5,3]


// Code-challange
// 49 of 366 day
// https://www.codewars.com/kata/5545f109004975ea66000086/solutions/javascript

// function isDivisible(n, x, y) {

//     if(n % x == 0 && n % y == 0){
//         return true
//     } else {
//         return false
//     }
// }

const isDivisible = (n, x, y) => Boolean(n % x == 0 && n % y == 0)


console.log(isDivisible(3,3,4)); //false
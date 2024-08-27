// Code-challange
// 77 of 366 day
// https://www.codewars.com/kata/56606694ec01347ce800001b/solutions/javascript

// function isTriangle(a,b,c)
// {
//   return a + b > c && a + c > b && c + b > a ? true : false
// }

const isTriangle = (a,b,c) => a + b > c && a + c > b && c + b > a 

console.log(isTriangle(7,2,2)); // true

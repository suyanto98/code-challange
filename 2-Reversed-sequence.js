// Code-challange 
// 2 of 366 day
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript

// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i > 0; i--) {
//     result.push(i);
//   }
//   return result;
// };


// const reverseSeq = (n) => Array(n).fill().map((v, i) => i + 1 ).reverse()

const reverseSeq = (n) => Array(n).fill().map((v, i) => n - i )


console.log(reverseSeq(5));
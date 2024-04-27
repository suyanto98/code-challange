// Code-challange
// 19 of 366 day
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript

// function sumMix(x) {
//   const formatNumber = x
//     .map((value) => Number(value))
//     .reduce((acc, curr) => acc + curr, 0);
//   return formatNumber;
// }

// function sumMix(x) {
//     let newArray = [];
//     for(let i = 0; i < x.length; i ++) {
//         newArray.push(Number(x[i]))
//     }

//     let result = 0;
//     for(let j = 0; j < newArray.length; j++) {
//         result += newArray[j]
//     }
    
//     return result
// }

// function sumMix(x) {
//     let result = 0;
//     for(let i = 0; i < x.length; i++) {
//         result += parseInt(x[i])
//     }
//     return result
// }

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr , 0)

console.log(sumMix([9, 3, "7", "3"]));

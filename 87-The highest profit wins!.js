// Code-challange
// 87 of 366 day
// https://www.codewars.com/kata/559590633066759614000063/solutions/javascript

// function minMax(arr){
//     let max = arr[0];
//     let min = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] > max){
//             max = arr[i]
//         } else if((arr[i] < min)){
//             min = arr[i]
//         }        
//     }

//     return [min, max]
// }

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]

console.log(minMax([1,2,3,4,5])); // [1,5]

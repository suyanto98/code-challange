// Code-challange
// 86 of 366 day
// 

// var number=function(array){
//     if(array.length == 0) return []

//     let result = []

//     for (let i = 1; i <= array.length; i++) {
//         result.push(`${i}: ${array[i - 1]}`)
//     }

//     return result
// }

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"]


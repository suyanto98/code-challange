// Code-challange 
// 93 of 366 day

// function maps(x){
//     let result = []
//     for (let i = 0; i < x.length; i++) {
//         result.push(x[i] * 2)
//     }
//     return result
// }

const maps = (x) => x.map((value) => value * 2)

console.log(maps([1, 2, 3])) //[2, 4, 6]

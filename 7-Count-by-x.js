// Code-challange
// 7 of 366 day


// function countBy(x, n) {
//     let z = [];
//     for(let i = 1; i <= n; i++){
//         z.push(x * i)
//     }
//     return z
// }

// function countBy(x, n) {
//     let newArray = [...new Array(n)].map((el, i) => (i + 1) * x)
//     return newArray
// }

const countBy = (x, n) => [... new Array(n)].map((el, i) => (i+1) * x)

console.log(countBy(2,5))
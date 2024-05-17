// Code-challange
// 23 of 366 day
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/solutions/javascript

// function monkeyCount(n) {
//     let result = []
//     for(let i = 1; i <= n; i++){
//         result.push(i)
//     }
//     return result;
// }

// const monkeyCount = (n) => new Array(n).fill().map((v, i) => i + 1)

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);

console.log(monkeyCount(5))
//    assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
// Code-challange
// 63 of 366 day
// https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/javascript

// function maskify(cc) {
//     let result = ''
//     for (let i = 0; i < cc.length ; i++) {
//         if(i < cc.length - 4){
//             result += '#'
//         } else {
//             result += cc[i]
//         }
//     }

//     return result
// }

// function maskify(cc){
//     return [... cc].map((value, index) => index < cc.length - 4 ? "#" : value).join('')
// }

const maskify = (cc) => [... cc].map((value, index) => index < cc.length - 4 ? "#" : value).join('')

console.log(maskify('4556364607935616')); //#1111

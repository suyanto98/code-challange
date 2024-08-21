// Code-challange
// 68 of 366 day
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript

// function longest(s1, s2) {
//     const joinStr = s1 + s2
//     const result = []

//     for (let i = 0; i < joinStr.length; i++) {
//         if(!result.includes(joinStr[i])){
//             result.push(joinStr[i])
//         }
//     }
//     return result.sort().join('')
// }

const longest = (s1, s2) => [...new Set((s1 + s2))].sort().join('')

console.log(longest("aretheyhere", "yestheyarehere")); //"aehrsty"

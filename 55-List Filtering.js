// Code-challange
// 55 of 366 day
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript

// function filter_list(l) {
//     let result = [];

//     for (let i = 0; i < l.length; i++) {
//        if(typeof(l[i]) == 'number'){
//         result.push(l[i])
//        } 
//     }

//     return result
// }

const filter_list = (l) => l.filter((value) => typeof(value) == 'number')

console.log(filter_list([1,2,'a','b'])); // [1, 2]

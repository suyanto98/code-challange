// Code-challange
// 16 of 366 day
// https://www.codewars.com/kata/563e320cee5dddcf77000158/solutions/javascript

function getAverage(marks){
    let result = 0
    for (let i = 0; i < marks.length; i++) {
        result += marks[i]
    }
    return Math.floor(result / marks.length)
}

// function getAverage(marks){
//     let sum = marks.reduce((acc, curr) => acc + curr,0)
//     sum = Math.floor(sum / marks.length)
//     return sum 
// }

// const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length)

console.log(getAverage([2,2,2,2]))
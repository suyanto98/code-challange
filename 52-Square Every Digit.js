// Code-challange
// 52 of 366 day
// https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript

// function squareDigits(num){
//     const value = String(num)
//     let result = ''
//     for (let i = 0; i < value.length; i++) {
//        result += Number(value[i]) * Number(value[i])
//     }
//     return Number(result);
// }

const squareDigits = (num) => Number([... num + ''].map((v) => Number(v) * Number(v)).join(''))


console.log(squareDigits(3212), ); //9414



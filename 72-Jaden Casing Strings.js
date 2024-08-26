// Code-challange
// 72 of 366 day
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript

// String.prototype.toJadenCase = function () {
//     const arrStr = this.split(' ')
//     let result = []
//     for (let i = 0; i < arrStr.length; i++) {
//         result.push(`${arrStr[i][0].toUpperCase()}${arrStr[i].slice(1)}`)
//     }
//     return result.join(' ')
// };

String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());




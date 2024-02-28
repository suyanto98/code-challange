// Code-challange
// 17 of 366 day
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/solutions/javascript

// const areaOrPerimeter = function(l , w) {
//     if(l !== w) return 2 * (l + w)
//     return l * w
// };

const areaOrPerimeter = (l, w) => l !== w ? 2 * (l + w) : l * w

console.log(areaOrPerimeter(6, 10))
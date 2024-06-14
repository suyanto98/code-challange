// Code-challange
// 32 of 366 day
// https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/javascript

function makeNegative (num) {
    if(num == 0) return 0
    if (Math.sign(num) === 1) {
        return -num
      } else if (Math.sign(num) === -1) {
        return num
      }
}

console.log(makeNegative(9));
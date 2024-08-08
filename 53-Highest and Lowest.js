// Code-challange
// 53 of 366 day
// https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript

// function highAndLow(numbers) {
//     const numArray = numbers.split(' ').map(Number);
//     const maxNum = Math.max(...numArray);
//     const minNum = Math.min(...numArray);
//     return `${maxNum} ${minNum}`;
// }
  
function highAndLow(numbers) {
    const numArray = numbers.split(' ').map(Number);
    let maxNum = numArray[0];
    let minNum = numArray[0];
  
    for (let i = 1; i < numArray.length; i++) {
      if (numArray[i] > maxNum) {
        maxNum = numArray[i];
      }
      if (numArray[i] < minNum) {
        minNum = numArray[i];
      }
    }
  
    return `${maxNum} ${minNum}`;
}

console.log(highAndLow("1 2 3")); // '3, 1'


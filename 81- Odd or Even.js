// Code-challange
// 81 of 366 day
// 

// function oddOrEven(array) {
//     const sum = array.reduce((prev, curr) => prev + curr, 0)
//     return sum % 2 == 0 ? 'even' : 'odd' 
// }

const oddOrEven = (array) => array.reduce((prev, curr) => prev + curr, 0) % 2 ? 'odd' : 'even' 

console.log(oddOrEven([0, -1, -5])); // Even

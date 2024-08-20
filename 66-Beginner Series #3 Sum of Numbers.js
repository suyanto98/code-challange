// Code-challange
// 65 of 366 day
// 


// function getSum(a, b)
// {
//     if (a === b) {
//         return a;
//     }

//     const start = Math.min(a, b);
//     const end = Math.max(a, b);

//     let totalSum = 0;
//     for (let i = start; i <= end; i++) {
//         totalSum += i;
//     }

//     return totalSum;
// }

const getSum = (a, b) => (Math.abs(a - b) + 1) * (a+b) / 2

console.log(getSum(4, -1)); 

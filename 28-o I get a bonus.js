// Code-challange
// 28 of 366 day
// https://www.codewars.com/kata/56f6ad906b88de513f000d96/solutions/javascript

// function bonusTime(salary, bonus) {
//     if(bonus) return `£${salary * 10}`
//     return `£${salary}`
// }

const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}` 

console.log(bonusTime(10000, true)) //'£100000'

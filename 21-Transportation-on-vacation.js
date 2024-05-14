// Code-challange
// 21 of 366 day
// https://www.codewars.com/kata/568d0dd208ee69389d000016/solutions/javascript

// function rentalCarCost(d) {
//     let result = 0

//     if(d < 3){
//          result = d * 40 
//     } else if( d < 7) {
//          result = d * 40 - 20
//     } else {
//         result =  d * 40 - 50
//     }

//     return result
// }

// console.log(rentalCarCost(7))

// function rentalCarCost(d){
// let diskon = 0;
// if(d >= 7){
//     diskon = 50;
// } else if(d >= 3) {
//     diskon = 20;
// }

// return d * 40 - diskon;
// }

// function rentalCarCost(d){
//     return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
// }

const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);


console.log(rentalCarCost(7))
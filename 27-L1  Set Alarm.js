// Code-challange
// 27 of 366 day
// https://www.codewars.com/kata/568dcc3c7f12767a62000038/solutions/javascript

// function setAlarm(employed, vacation){
//     if(employed == true, vacation == false)
//     {
//         return true;
//     }
//     return false;
// }

// const setAlarm =  (employed, vacation) => employed == true && vacation == false ? true : false
const setAlarm = (employed, vacation) => employed && !vacation

console.log(setAlarm(true, false))
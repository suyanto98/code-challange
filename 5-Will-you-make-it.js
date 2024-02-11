// Code-challange
// 5 of 366 day
// https://www.codewars.com/kata/5861d28f124b35723e00005e/solutions/javascript


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     const countGalon = distanceToPump / mpg
//     if(countGalon <= fuelLeft){
//         return true
//     } else {
//         return false
//     }
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump/mpg <= fuelLeft

console.log(zeroFuel(100, 50, 1))
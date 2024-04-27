// Code-challange
// 20 of 366 day
// https://www.codewars.com/kata/5aa736a455f906981800360d/solutions/javascript

// function feast(beast, dish) {
//     if( beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
//         return true
//     }
//     return false
// }

function feast(beast, dish) {
    return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)
}

// const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] 
 


console.log(feast("brown bear", "bear claw"))
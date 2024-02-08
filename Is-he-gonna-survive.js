// Code-challange
// 3 of 366 day
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/solutions/javascript

// function hero(bullets, dragons) {
//   const killDragon = dragons * 2;
//   if (killDragon <= bullets) {
//     return true;
//   } else {
//     return false;
//   }
// }

const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(8, 4));

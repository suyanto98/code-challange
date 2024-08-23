// Code-challange
// 70 of 366 day
// 

// function findNextSquare(sq) {
//     for (let i = 1; i < Math.floor(sq / 8); i++) {
//         if(sq / i == i){
//             return (i+1) * (i+1)
//         }
//     }
//     return -1
// }

const findNextSquare = sq => Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;

console.log(findNextSquare(121)); //144



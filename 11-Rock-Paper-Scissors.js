// Code-challange
// 11 of 366 day
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions/javascript


// const rps = (p1, p2) => {
//     let result
//     if(p1 == 'rock' & p2 == 'scissors'){
//         result = "Player 1 won!"
//     }else if(p1 == 'rock' & p2 == 'paper') {
//          result = "Player 2 won!"
//     }else if(p1 == 'scissors' & p2 == 'rock') {
//          result = "Player 2 won!"
//     } else if(p1 == 'paper' & p2 == 'rock') {
//          result = "Player 1 won!"
//     } else if(p1 == 'scissors' & p2 == 'paper') {
//          result = "Player 1 won!"
//     } else if (p1 == 'paper' & p2 == 'scissors') {
//         result = "Player 2 won!"
//     } else {
//         result = 'Draw!'
//     }
//     return result
// };

// const rps = (p1, p2) => {
//     if(p1 === p2) return 'Draw!'

//     if(p1 === 'rock' && p2 ==='scissors'){
//         return "Player 1 won!"
//     } else if(p1 === 'paper' && p2 ==='rock') {
//         return "Player 1 won!"
//     } else if(p1 === 'scissors' && p2 ==='paper') {
//         return "Player 1 won!"
//     } else {
//         return "Player 2 won!"
//     }
// }

// const rps = (p1, p2) => {
//     if(p1 === p2) return 'Draw!'

//     if(p1 === 'rock' && p2 ==='scissors' || p1 === 'paper' && p2 ==='rock' || p1 === 'scissors' && p2 ==='paper'){
//         return "Player 1 won!"
//     } else {
//         return "Player 2 won!"
//     }
// }

// const rps = (p1, p2) => {
//   const rules = {
//     rock: "scissors",
//     scissors: "paper",
//     paper: "rock",
//   };

// //   if(p1 === p2){
// //     return 'Draw!'
// //   } else {
// //     return `Player ${rules[p1] === p2 ? '1' : '2'} won!`
// //   }

//   return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? '1' : '2'} won!`

// };

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
};

console.log(rps("scissors", "paper"));

// Code-challange
// 56 of 366 day
// https://www.codewars.com/kata/56747fd5cb988479af000028/solutions/javascript

// function getMiddle(s)
// {
//   const index = s.length / 2

//   if(Math.round(index) === index){
//     return `${s[index - 1]}${s[index]}`
//   } else {
//     return `${s[Math.round(index - 1)]}`
//   }

// }

const getMiddle = (s) => Math.round(s.length / 2) == s.length / 2 ?  `${s[s.length / 2 - 1]}${s[s.length / 2]}` : `${s[Math.round(s.length / 2 - 1)]}`

// console.log(getMiddle("test"),"es");
console.log(getMiddle("test"),"t");




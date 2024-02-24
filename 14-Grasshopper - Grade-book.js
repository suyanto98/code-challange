// Code-challange
// 14 of 366 day
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/solutions/javascript

// function getGrade (s1, s2, s3) {
//      const score = Math.round((s1 + s2 + s3) / 3)
//      if(score < 60) return 'F'
//      if(score < 70) return 'D'
//      if(score < 80) return 'C'
//      if(score < 90) return 'B'
//      return 'A'
// }

function getGrade(...s){
     const score = s.reduce((acc, curr) => acc + curr ) /3
     if(score < 60) return 'F'
     if(score < 70) return 'D'
     if(score < 80) return 'C'
     if(score < 90) return 'B'
     return 'A'
}
console.log(getGrade(48,55,52))
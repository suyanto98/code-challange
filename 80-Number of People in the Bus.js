// Code-challange
// 80 of 366 day
// 

// function number (busStops){
//     let result = 0;
//     for (let i = 0; i < busStops.length; i++) {
//         result += busStops[i][0] - busStops[i][1]
//     }
//     return result
// }

const number = (busStops) => busStops.reduce((prev, curr) => prev + curr[0] - curr[1] ,0)

console.log(number([[10,0],[3,5],[5,8]])); // 5

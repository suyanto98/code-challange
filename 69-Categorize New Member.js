// Code-challange
// 69 of 366 day
// 

// function openOrSenior(data){
//     let result = []

//     for (let i = 0; i < data.length; i++) {
//         if(data[i][0] >= 55 && data[i][1] > 7){
//             result.push('Senior')
//         } else {
//             result.push('Open')
//         }
//     }

//     return result
// }

const openOrSenior = (data) => data.map((value) =>  value[0] >= 55 && value[1] > 7 ? 'Senior' : 'Open')

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); //['Open', 'Senior', 'Open', 'Senior']

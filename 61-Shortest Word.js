// Code-challange
// 61 of 366 day
// 

// function findShort(s){
//     const arrData = s.split(' ')
//     let result = arrData[0].length
    
//     for (let i = 1; i < arrData.length; i++) {
//         if(arrData[i].length < result){
//             result = arrData[i].length
//         }
//     }

//     return result
// }

const findShort = (s) => Math.min(...s.split(" ").map (s => s.length));


console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3

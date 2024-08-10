// Code-challange
// 57 of 366 day
// 

// var isSquare = function(n){

//     let result = false;

//     if(n < 0){
//         return result =  false;
//     } 

//     if(n == 0 || n == 1){
//         return result =  true;
//     } 

//     for (let i = 0; i < n; i++) {
//         if(n / i == i){
//             return result = true
//         }
//     }
//     return result

// }

// var isSquare = function(n){
//     for (var x = 0; x <= n; x++) {
//       if (n === 0) {
//         return true;
//       } else if (n / x === x) {
//         return true;
//       }
//     }
    
//     return false;
// }

const isSquare = n => Number.isInteger(Math.sqrt(n));


console.log(isSquare(1)); // true

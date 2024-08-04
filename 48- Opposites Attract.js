// Code-challange
// 48 of 366 day
// https://www.codewars.com/kata/555086d53eac039a2a000083/solutions/javascript

// function lovefunc(flower1, flower2){
//     if(flower1 % 2 == 1 && flower2 % 2 ==0 || flower1 % 2 == 0 && flower2 % 2 == 1){
//         return true
//     } else {
//         return false
//     }
// }

// function lovefunc(flower1, flower2){
//     const boolFlower1 = flower1 % 2 == 0
//     const boolFlower2 = flower2 % 2 == 0

//     return boolFlower1 != boolFlower2 ? true : false
// }

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(1,4)); // true
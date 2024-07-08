// Code-challange
// 39 of 366 day
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions/javascript

// function findSmallestInt(arr) {
//     let number = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] < number){
//             number = arr[i]
//         }
//     }
//     return number;
// }

function findSmallestInt(arr) {
    let number = arr[0]
    arr.map((value) => {
         if(value < number){
            number = value
        }
    })
    return number
}

console.log(findSmallestInt([78,56,232,12,8])); // 8

// Code-challange
// 12 of 366 day
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/solutions/javascript

//
// function arrayPlusArray(arr1, arr2) {
//     const allArray = [...arr1, ...arr2]
//     return allArray.reduce((acc, curr) => acc + curr, 0)
// }

// const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0) 

// function arrayPlusArray (arr1, arr2) {
//     let result = 0

//     for (let i = 0; i < arr1.length; i++) {
//         result += arr1[i]
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         result += arr2[i]
//     }

//     return result
// }

// function arrayPlusArray (arr1, arr2) {
//     let result = 0

//     for (let i = 0; i < arr1.length; i++) {
//         result += arr1[i]
//         result += arr2[i]
//     }
//     return result
// } 

function arrayPlusArray(arr1, arr2) {
    let total = 0

    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            total += arguments[i][j]
        }
    }
    return total
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
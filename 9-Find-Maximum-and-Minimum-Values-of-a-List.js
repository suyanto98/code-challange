// Code-challange
// 9 of 366 day
// https://www.codewars.com/kata/577a98a6ae28071780000989/solutions/javascript

// var min = function(list){
//     const result = list.sort((a, b) => a - b)[0]
//     return result
// }

// var max = function(list){
//     const result = list.sort((a, b) => a - b)[list.length - 1]
//     return result;
// }

const min = (arr) => {
    let nilaiTerendah = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < nilaiTerendah) {
            nilaiTerendah = arr[i];
        }
    }
    return nilaiTerendah
}
console.log(min([4,6,2,1,9,63,-134,566] ))

const max = (arr) => {
    let nilaiTerendah = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > nilaiTerendah) {
            nilaiTerendah = arr[i];
        }
    }
    return nilaiTerendah
}

console.log(max([4,6,2,1,9,63,-134,566]))
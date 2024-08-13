// Code-challange
// 60 of 366 day
// https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript

// function XO(str) {
//     let count_x = 0;
//     let count_o = 0;

//     for (let i = 0; i < str.length; i++) {
//         if(str[i].toLowerCase() === 'x'){
//             count_x += 1
//         }

//         if(str[i].toLowerCase() === 'o'){
//             count_o += 1
//         }
//     }

//     return count_x == count_o ? true : false
// }

function XO(str) {
    const countX = [... str].filter((value) => value.toLowerCase() == 'x').length
    const countO = [... str].filter((value) => value.toLowerCase() == 'o').length

    return countX == countO ? true : false
}

console.log(XO('xxOo'))
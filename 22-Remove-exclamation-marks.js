// Code-challange
// 22 of 366 day
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions/javascript

// function removeExclamationMarks(s) {
//     return s.split("!")[0]
// }

function removeExclamationMarks(s) {
    return s.split('!').join('');
}


// function removeExclamationMarks(s) {
//     return s.slice(0, -1)
// }


// function removeExclamationMarks(s) {
//     let result = ''
//     for (let i = 0; i < s.length; i++) {
//         if(s[i] != '!'){
//             result+=s[i]
//         }   
//     }
//     return result
// }




console.log(removeExclamationMarks(" Hi Hello World!"))
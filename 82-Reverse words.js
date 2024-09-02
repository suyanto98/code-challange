// Code-challange
// 82 of 366 day
// 


// function reverseWords(str) {
//     let split = str.split(' ');
//     let result = []
    
//     for (let i = 0; i < split.length; i++) {
//         result.push( split[i].split('').reverse().join(''))
//     }
//     return result.join(' ')
// }

function reverseWords(str) {

    let strArray = str.split(' ')
    let result = []

    for (let i = 0; i < strArray.length; i++) {
        let word = ''
        for (let j = strArray[i].length - 1; j >= 0; j--) {
            word += strArray[i][j]
        }
        result.push(word)
    }

    return result.join(' ')
}

console.log(reverseWords("This is an example!")); // "sihT si na !elpmaxe"

// Code-challange
// 65 of 366 day
// 


// function disemvowel(str) {
//     let result = ''
//     let word = str.toLowerCase()

//     for (let i = 0; i < str.length; i++) {
//         if(word[i] != 'a' & word[i] != 'e' & word[i] != 'i' & word[i] != 'o' & word[i] != 'u'){
//             result += str[i]
//         }
//     }

//     return result
// }

// function disemvowel(str) {
//     const vowel = 
//     return str.replace(vowel, '')
// }


const disemvowel = (str) => str.replace( /[aeiouAEIOU]/g , '')


console.log(disemvowel("What are you, a communist?")); //  "Wht r y,  cmmnst?"

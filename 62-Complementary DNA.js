// Code-challange
// 62 of 366 day
// 

// function dnaStrand(dna){
//     let result = '';
//     for (let i = 0; i < dna.length; i++) {
//         if(dna[i] == 'G'){
//             result += 'C'
//         }

//         if(dna[i] == 'C'){
//             result += 'G'
//         }

//         if(dna[i] == 'A'){
//             result += 'T'
//         }

//         if(dna[i] == 'T'){
//             result += 'A'
//         }
//     }
//     return result
// }

// function dnaStrand(dna){
//     let result = '';
//     for (let i = 0; i < dna.length; i++) {
//         dna[i] == 'G' ? result += 'C' : dna[i] == 'C' ?  result += 'G' : dna[i] == 'A' ? result += 'T' : result += 'A'
//     }
//     return result
// }

let symbols = {'A':'T','T':'A','C':'G','G':'C'};

const dnaStrand = (dna) => dna.split('').map(v => symbols[v]).join('')

console.log(dnaStrand("GTAT")) // CATA
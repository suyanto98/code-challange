// Code-challange
// 6 of 366 day
// https://www.codewars.com/kata/5556282156230d0e5e000089/solutions/javascript

// function DNAtoRNA(dna) {
//     const arrayString = dna.split('')
//     let result = ''
//     for(let i = 0; i < arrayString.length; i ++){
//         if(arrayString[i] == 'T'){
//             result += 'U'
//         } else {
//             result += arrayString[i]
//         }
//     }
//     return result
// }

// const DNAtoRNA = (dna) => dna.replaceAll('T','U')

// const DNAtoRNA = (dna) => {
//     let result = ''
//     dna.split('').map((s,i) => dna[i] == 'T' ? result+= 'U' : result += dna[i])
//     return result
// }

// const DNAtoRNA = (dna) => {
//     let rna = ''
//     for(let i = 0; i < dna.length; i++){
//         rna += dna[i] === 'T' ? 'U' : dna[i] 
//     }
//     return rna
// }

const DNAtoRNA = (dna) => dna.split('').map((el) => el == 'T' ? 'U': el).join('')

console.log(DNAtoRNA("GCAT"))
// Code-challange
// 50 of 366 day
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/solutions/javascript

const haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++) {
//         if(haystack[i] == 'needle'){
//             return `found the needle at position ${i}`
//         }
//     }

//     return result
// }

// const findNeedle = (haystack) => {
//     const index = haystack.findIndex(v => v === 'needle');
//     return index !== -1 ? `found the needle at position ${index}` : 'needle not found';
// };

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle(haystack_1)); // 'found the needle at position 3'


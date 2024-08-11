// Code-challange
// 58 of 366 day
// 

// function accum(s) {
//     let result = '';

// 	for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             if(j == 0){
//                 result += s[i].toUpperCase()
//             } else {
//                 result += s[i].toLowerCase()
//             }
//         }
//         if( i !== s.length - 1) {
//             result += '-'
//         } 
//     }

//     return result;
// }

function accum(s) {
	return s.split('')
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join('-');
}

console.log(accum("abcd")); //"A-Bb-Ccc-Dddd"

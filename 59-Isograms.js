// Code-challange
// 59 of 366 day
// 


// function isIsogram(str){
//     const arr = [...str]
//     let find = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(str[i].toLowerCase() == str[j].toLowerCase()){
//                 find += 1
//             }
//         }
//     }
//     return find <= str.length ? true : false
// }


function isIsogram(str) {
    return str.length == new Set(str.toLowerCase()).size;
}


console.log(isIsogram('aba')); // true

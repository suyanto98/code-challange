// Code-challange
// 40 of 366 day

// function noSpace(x){
//     let result = '';
//     for (let i = 0; i < x.length; i++) {
//         if(x[i] != ' '){
//             result += x[i]
//         }
//     }
//     return result;
// }
function noSpace(x){
    let newArray = x.split('');
    let result = '';
    newArray.map((_, i) =>{
        if(x[i] !== ' '){
            result += x[i]
        }
    })
    return result
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
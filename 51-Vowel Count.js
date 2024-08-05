// Code-challange
// 51 of 366 day
//

// function getCount(str) {

//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o'){
//             result += 1
//         }
//     }
//     return result;
// }

function getCount(str) {
    let result = 0;
    [... str].map((value) => {
        if(value == 'a' || value == 'i' || value == 'u' || value == 'e' || value == 'o'){
            result += 1
        }
    })
    return result
}

console.log(getCount("abracadabra"));

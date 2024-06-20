// Code-challange
// 36 of 366 day
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/javascript

function removeChar(str){
    let result = ''
    for (let i = 1; i < str.length - 1; i++) {
        result += str[i]
    }

    return result
};


console.log(removeChar('eloquent'), 'loquen');
// Code-challange
// 37 of 366 day
// https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript

function squareSum(numbers){
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] * numbers[i]
    }
    return result;
}

console.log(squareSum([1,2]), 5);
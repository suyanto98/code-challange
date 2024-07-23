// Code-challange
// 45 of 366 day
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript

function century(year) {
    return Math.floor((year - 1) / 100) + 1;
}

console.log(century(1705)); // 18
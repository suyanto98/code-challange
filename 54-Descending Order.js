// Code-challange
// 54 of 366 day
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript

function descendingOrder(n){
    return Number([...n + ''].sort((a,b) => b - a).join(''))
}

console.log(descendingOrder(1021)); // 2110

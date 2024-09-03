// Code-challange
// 88 of 366 day


function stray(arr) {
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3

// Code-challange
// 76 of 366 day
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/solutions/javascript

function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 += Math.floor(p0 * (percent / 100)) + aug;
        years++;
    }
    return years;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
console.log(nbYear(1000, 2.0, 50, 1214)); // 4
 // 15

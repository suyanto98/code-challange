// Code-challange
// 84 of 366 day
// https://www.codewars.com/kata/544aed4c4a30184e960010f4/solutions/javascript


function divisors(integer) {

    let result = [];

    for (let i = 2; i < integer; i++) {
        if(integer % i == 0){
            result.push(i)
        } 
    } 

    return result.length ?  result : `${integer} is prime` 
}

console.log(divisors(15)); // [3, 5]

// Code-challange
// 35 of 366 day
// https://www.codewars.com/kata/56dec885c54a926dcd001095/solutions/javascript

function opposite(number) {
    if(number == 0){
        return 0
    }

    if(number > 0){
        return -number
    }

    if(number < 0){
        return number * -1
    }
}

console.log(opposite(-5), 5);
// Code-challange
// 30 of 366 day
//https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript

function positiveSum(arr) {
    if(arr.length == 0) return 0
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0){
            result += arr[i]
        }
    }
    return result
}
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
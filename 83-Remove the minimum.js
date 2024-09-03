// Code-challange
// 83 of 366 day
// 


function removeSmallest(numbers) {
    let arr = [...numbers]
    let small = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < small){
            small = arr[i] 
        }
    }

    let findIndex = arr.indexOf(small)
    arr.splice(findIndex, 1)
    return arr
}

console.log(removeSmallest([ 139, 227, 281, 45, 299, 279, 24, 84, 105, 381, 121, 151, 91, 232 ])); // [5, 3, 2, 4]





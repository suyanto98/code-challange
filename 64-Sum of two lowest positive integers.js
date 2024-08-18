// Code-challange
// 64 of 366 day
// 

// function sumTwoSmallestNumbers(numbers) {  
//     const sort = numbers.sort((a, b) => a - b)
//     return sort[0] + sort[1]
// }

function sumTwoSmallestNumbers (numbers) {
    let n = numbers.length;

    for (let i = 1; i < n; i++) {
        let key = numbers[i];
        let j = i - 1;

        while (j >= 0 && numbers[j] > key) {
            numbers[j + 1] = numbers[j];
            j--;
        }

        numbers[j + 1] = key;
    }

    return numbers;
}

console.log(sumTwoSmallestNumbers([64, 25, 12, 22, 11])); //13

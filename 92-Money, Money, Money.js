// Code-challange 
// 92 of 366 day

function calculateYears(principal, interest, tax, desired) {

    let sum = principal
    let years = 0

    while(sum < desired) {

        sum = sum + (sum * interest - (sum * interest * tax))
        years += 1

    }

    return years
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);

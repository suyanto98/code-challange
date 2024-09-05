// Code-challange 
// 90 of 366 day

function getDivisorsCnt(n){
    let count = 0;
    const sqrtN = Math.sqrt(n);

    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            count++; 
            if (i !== n / i) {
                count++; 
            }
        }
    }
    
    return count;
}

console.log(getDivisorsCnt(54)); // 8


// Code-challange
// 89 of 366 day

function dontGiveMeFive(start, end)
{
    let result = 0;

    for (let index = start; index <= end; index++) {
        if(!`${index}`.includes(5)){
            result += 1
        } 
    }

    return result
}

console.log(dontGiveMeFive(4,17));

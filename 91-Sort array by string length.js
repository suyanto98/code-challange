// Code-challange 
// 91 of 366 day

function sortByLength (array) {
    return array.sort((a, b) => {
        if(a.length < b.length) {return -1}
        if(a.length > b.length) {return 1}
        return 0
    })
}

console.log(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);

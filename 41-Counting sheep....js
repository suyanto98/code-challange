// Code-challange
// 41 of 366 day
// https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript

// function countSheeps(sheep) {
//     let count = 0;
//     for (let i = 0; i < sheep.length; i++) {
//         if(sheep[i] == true){
//             count += 1;
//         };
//     };
//     return count;
// }

function countSheeps(sheep) {
    let count = 0;
    sheep.map((v) => {
        if(v == true) {
            count += 1
        };
    });

    return count;
}

console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]
)); //2 
// Code-challange
// 66 of 366 day
// 

// function friend(friends){

//     let result = []

//     for (let i = 0; i < friends.length; i++) {
//         if(friends[i].length == 4){
//             result.push(friends[i])
//         }
//     }

//     return result
// }

const friend = (friends) => friends.filter((value) => value.length == 4)


console.log(friend(["Ryan", "Kieran", "Mark"])); //["Ryan", "Mark"]

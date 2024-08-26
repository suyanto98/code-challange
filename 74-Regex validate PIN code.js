// Code-challange
// 74 of 366 day
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/solutions/javascript

// function validatePIN (pin) {    
//     if(isNaN(pin) || pin.includes('.') || pin.includes('\n') || pin.includes('+') || pin.includes(' ') || Number(pin) < 0) return false
//     return pin.length == 4 || pin.length == 6 ? true : false
// }

const validatePIN = pin => /^(\d{4}|\d{6})$/g.test(pin);

console.log(validatePIN('123')); // false


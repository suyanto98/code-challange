// Code-challange
// 42 of 366 day
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions/javascript


// const basicOp = (operation, value1, value2) => operation == "+" ? value1 + value2 : operation == "-" ? value1 -value2 : operation == "*" ? value1 * value2 : operation == "/" ? value1 / value2 : 0

function basicOp (operation, value1, value2) {
  let result = 0
  switch(operation){
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      0
      break
  }

  return result
}

console.log(basicOp("+", 4, 7)); // 11
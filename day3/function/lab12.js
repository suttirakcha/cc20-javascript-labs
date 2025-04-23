// LAB - 12 : Check if the number is positive, negative, or zero

const checkNumber = (num) => {
  return  num > 0 ? 'Positive number' : 
    num === 0 ? 'Zero' :
    num < 0 ? 'Negative number' :
    'Invalid number'
}

let result1 = checkNumber(-5);
let result2 = checkNumber(0);
let result3 = checkNumber(42);

console.log(result1, result2, result3);
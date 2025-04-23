// LAB - 16 : Find the greater value

const findGreaterValue = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)){
    return 'Invalid number';
  } else {
    return num1 > num2 ? num1 : num2
  }
}

let result1 = findGreaterValue(2, 0);
let result2 = findGreaterValue(4, 5);
let result3 = findGreaterValue(9, 12);
let result4 = findGreaterValue(88, 87);
let result5 = findGreaterValue(238, 473);

console.log(result1, result2, result3, result4, result5);
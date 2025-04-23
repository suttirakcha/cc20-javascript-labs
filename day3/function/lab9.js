// LAB - 9 : Check if the number is even or not

const isNumberEven = (num) => {
  return num % 2 === 0;
}

let result1 = isNumberEven(0);
let result2 = isNumberEven(4);
let result3 = isNumberEven(11);
let result4 = isNumberEven(250);
let result5 = isNumberEven(1924387);

console.log(result1, result2, result3, result4, result5);
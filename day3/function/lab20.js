// LAB - 20 : Find the prime number

const isPrimeNumber = (num) => {
  return num % 2 !== 0 && num % 3 !== 0;
}

let result1 = isPrimeNumber(0);
let result2 = isPrimeNumber(3);
let result3 = isPrimeNumber(15);
let result4 = isPrimeNumber(49);
let result5 = isPrimeNumber(83);

console.log(result1, result2, result3, result4, result5);
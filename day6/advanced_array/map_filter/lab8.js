const array1 = [9, 17, 23, 5];
const result1 = array1.filter(item => item > 10);

console.log(result1);

const array2 = [1, 2, 3, 4];
const result2 = array2.filter(item => item % 2 !== 0);

console.log(result2);

const array3 = [1, '1', 2, {}];
const result3 = array3.filter(item => typeof item === "number");

console.log(result3);
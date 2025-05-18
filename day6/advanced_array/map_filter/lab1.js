const array1 = [1, 2, 30, 400];
const result1 = array1.map(item => item * 2)
console.log(result1);

const array2 = [1, 2, 3, 4];
const result2 = array2.map(item => String(item))
console.log(result2);

const array3 = [1, '1', 2, {}];
const result3 = array3.map(item => typeof item)
console.log(result3);
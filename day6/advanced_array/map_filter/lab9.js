const array1 = ['apple', 'banana', 'orange', 'pineapple', 'watermelon'];
const result1 = array1.filter(item => item.length > 6);

console.log(result1);

const array2 = [1, -3, 2, 8, -4, 5];
const result2 = array2.filter(item => item > 0);

console.log(result2);

const array3 = [1, 3, 4, 5, 6, 7, 8];
const result3 = array3.filter(item => item % 3 === 0);

console.log(result3);
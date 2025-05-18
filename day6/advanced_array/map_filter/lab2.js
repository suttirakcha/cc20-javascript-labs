const array1 = ['apple', 'banana', 'orange'];
const result1 = array1.map(item => item.toUpperCase());
console.log(result1);

const array2 = [1, 3, 4, 5, 6, 7, 8];
const result2 = array2.map(item => {
  return item % 2 === 0 ? "even" : "odd";
})
console.log(result2);

const array3 = [1, -3, 2, 8, -4, 5];
const result3 = array3.map(item => Math.abs(item));

// Unless using Math.abs, what method should I write?
const result3_1 = array3.map(item => item < 0 ? -item : item);
console.log(result3);
const array1 = [100, 200.25, 300.84, 400.3];
const result1 = array1.map(item => item.toFixed(2))
console.log(result1);

const array2 = [0, 5, 10, 7, 6, 5, 0];
const result2 = array2.map((item) => {
  const convertToMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return convertToMonth[item];
})
console.log(result2);

const array3 = [1, 16, 81, 256, 625, 1296];
const result3 = array3.map(item => Math.pow(item, 1/4));
console.log(result3);
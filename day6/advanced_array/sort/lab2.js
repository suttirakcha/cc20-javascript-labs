const arr = [-3, 2, 0, -7, 4, 6];
const squaredArr = arr.map(item => item * item);
squaredArr.sort((a, b) => a - b)

console.log(squaredArr);
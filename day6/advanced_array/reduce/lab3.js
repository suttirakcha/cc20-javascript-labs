let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let max = arr.reduce((prev, curr) => curr > prev ? curr : prev);
let min = arr.reduce((prev, curr) => curr < prev ? curr : prev);

console.log("Max:", max);
console.log("Min:", min);
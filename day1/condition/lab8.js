// LAB-8 : SortNumber
// Sort the number from the highest to the lowest number

const a = parseInt(prompt("Enter the first number"));
const b = parseInt(prompt("Enter the second number"));
const c = parseInt(prompt("Enter the third number"));
const enteredNums = [a, b, c];
console.log(`Sorted numbers: ${enteredNums.sort().reverse().join(" ")}`);
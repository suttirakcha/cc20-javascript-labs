// LAB - 6 : Fundamental
// Sum the two numbers together

const num1 = prompt("Enter the first number");
const num2 = prompt("Enter the second number");
const isNaN1 = (isNaN(num1) || num1.trim() === '' || num1 === null);
const isNaN2 = (isNaN(num2) || num2.trim() === '' || num2 === null);
const sum = Number(num1) + Number(num2);

if (isNaN1 || isNaN2) {
  console.log("Invalid number");
} else {
  console.log("Result: ", sum);
}
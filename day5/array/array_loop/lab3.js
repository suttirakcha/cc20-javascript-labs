let numbers = [];
let sum = 0;

while (true) {
  let input = prompt("Enter the number (press 'Esc' or click 'Cancel' to exit)");
  if (isNaN(input) || input === '' || input === null){
    break;
  }
  numbers.push(Number(input));
}

for (let number of numbers){
  sum += number;
}

console.log("Numbers:", numbers)
console.log("Sum:", sum);
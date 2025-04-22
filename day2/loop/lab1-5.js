// LAB 1-5 : For Loop

// LAB - 1 : Count 1 to 10
for (let i = 1; i <= 10; i++){
  console.log(i);
}

// LAB - 2 : Sum the total number in loop
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(`The total sum in loop is ${sum}`);

// LAB - 3 : Count 1 to 20 and show only even numbers
for (let i = 1; i <= 20; i++){
  if (i % 2 === 0) console.log(i);
}

// LAB - 4 : Multiplication table
for (let i = 1; i <= 10; i++) {
  console.log(`2 x ${i} = ${i * 2}`);
}

// LAB - 5 : Enter the number to multiply by 10 based on the multiplication table
let multiply = +prompt("What number would you like to be multiplied by 10?");
if (!isNaN(multiply)){
  for (let i = 1; i <= 10; i++) {
    console.log(`${multiply} x ${i} = ${i * multiply}`);
  }
} else {
  alert("Invalid number");
}
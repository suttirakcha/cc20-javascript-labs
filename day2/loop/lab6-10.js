// LAB 6-10 : While Loop

let i = 1;
let sum = 0;

// LAB - 6 : Count 1 to 10
while (i <= 10){
  console.log(i);
  i++;
}

// LAB - 7 : Sum the total number in loop
while (i <= 10){
  sum += i;
  i++;
}

console.log(sum);

// LAB - 8 : Count 1 to 20 and show only even numbers
while (i <= 20){
  if (i % 2 === 0){
    console.log(i);
  }
  i++
}

// LAB - 9 : Multiplication table
while (i <= 10) {
  console.log(`2 x ${i} = ${i * 2}`);
  i++;
}

// LAB - 10 : Enter the number to multiply by 10 based on the multiplication table
let multiply = +prompt("What number would you like to be multiplied by?");
while (i <= 10){
  console.log(`${multiply} x ${i} = ${i * multiply}`);
  i++;
}
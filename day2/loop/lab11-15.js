// LAB 11-15 : Do While Loop

// LAB - 11 : Count 1 to 10
do {
  console.log(i);
  i++;
}
while (i <= 10)

// LAB - 12 : Sum the total number in loop
do {
  sum += i;
  i++;
} while (i <= 10)

console.log(sum);

// LAB - 13 : Count 1 to 20 and show only even numbers
do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++
} while (i <= 20)

// LAB - 14 : Multiplication table
do {
  console.log(`2 x ${i} = ${i * 2}`);
  i++;
} while (i <= 10)

// LAB - 15 : Enter the number to multiply by 10 based on the multiplication table
let multiply = +prompt("What number would you like to be multiplied by?");
do {
  console.log(`${multiply} x ${i} = ${i * multiply}`);
  i++;
} while (i <= 10)
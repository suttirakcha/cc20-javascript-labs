// LAB - 4 : Fundamental

const myNum = prompt("Enter the number");
const enteredNum = Number(myNum);

if (myNum){
  if (enteredNum > 0) {
    alert("Positive number");
  } else if (enteredNum === 0) {
    alert("Zero");
  } else if (enteredNum < 0) {
    alert("Negative number");
  } else if (isNaN(enteredNum)){
    alert("Invalid number");
  }
} else {
  alert("You have not entered the number");
}
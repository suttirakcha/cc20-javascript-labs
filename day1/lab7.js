// LAB-7 : Fundamental

let score = +prompt("Enter the score");
if (score > 100) {
  alert("Score must not be greater than 100");
} else if (score >= 80) {
  alert("Your grade: A")
} else if (score >= 70) {
  alert("Your grade: B");
} else if (score >= 60) {
  alert("Your grade: C");
} else if (score >= 50) {
  alert("Your grade: D");
} else if (score < 50) {
  alert("Your grade: F")
} else if (score < 0) {
  alert("Score cannot be negative");
} else {
  alert("Please enter the score as a number")
}
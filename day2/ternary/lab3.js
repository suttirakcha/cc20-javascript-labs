// LAB - 3 : Refactor If-Else to Ternary Operator

let score = +prompt("Enter the score");
let result = 
  score > 100 ? "Score must not be greater than 100" :
  score >= 80 ? 'Your grade : A' :
  score >= 70 ? 'Your grade : B' :
  score >= 60 ? 'Your grade : C' :
  score >= 50 ? 'Your grade : D' :
  score < 50 ? 'Your grade : F' :
  score < 0 ? 'Score cannot be negative' :
  'Please enter the score as a number';

alert(result);
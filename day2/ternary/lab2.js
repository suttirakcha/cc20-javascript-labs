// LAB - 2 : Refactor If-Else to Ternary Operator

let login = prompt('Enter username');
let message = 
  login == 'Employee' ? 'Hello' : 
  login == 'Director' ? 'Greetings' : 
  login == '' ? 'No login' : 
  ''
console.log(message);
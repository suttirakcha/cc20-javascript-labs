// LAB - 15 : Check the user

const checkUser = (username, password, role) => {
  const isAdmin = username === 'admin' && password === '1234' && role === 'admin'
  const isUser = username === 'user' && password === '1234' && role === 'user'

  return (isAdmin || isUser) ? `Login successful: ${username}` : 'Login fail!';
}

let result1 = checkUser('admin', '1234', 'admin');
let result2 = checkUser('admin', '12345', 'admin');
let result3 = checkUser('user', '1234', 'admin');
let result4 = checkUser('user', '1234', 'user');
let result5 = checkUser('user', '123212', 'user');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
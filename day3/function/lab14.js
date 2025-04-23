// LAB - 14 : Login

const login = () => {
  const username = prompt("Enter username");
  const password = prompt("Enter password");
  const text = 
    username === 'admin' && password === '1234' ? 
    'Login successful!' : 
    'Invalid username or password!';

  alert(text);
}

login();
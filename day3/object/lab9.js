let result = {};

while (true) {
  let key = prompt('Enter the key');
  if (key === 'stop') break;
  let value = prompt('Enter the value');
  if (value === 'stop') break;

  result[key] = value;
}

console.log(result);
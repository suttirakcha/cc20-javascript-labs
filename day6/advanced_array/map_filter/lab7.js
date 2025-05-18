const array = [
  { name: 'apple', quantity: 10 },
  { name: 'banana', quantity: 20},
  { name: 'watermelon', quantity: 30}
];

// This is a readable HTML code in JavaScript
const result = array.map(item => (
  `
    <tr>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
    </tr>
  `
));

console.log(result);
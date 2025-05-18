const array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];

const result = array.map(item => {
  return `${item.name} ${item.surname}`
})

console.log(result);
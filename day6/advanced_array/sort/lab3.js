const arr = [
  { name: 'John', age: 25 },
  { name: 'Leon', age: 26 },
  { name: 'Mick', age: 29 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 }
];

// From lowest to highest age
arr.sort((a, b) => a.age - b.age);

// From highest to lowest age
// arr.sort((a, b) => b.age - a.age);
console.log(arr);
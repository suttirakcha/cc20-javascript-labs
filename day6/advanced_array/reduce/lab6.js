const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];

let result = products.reduce((acc, product) => {
  acc[product.id] = { name: product.name }
  return acc
}, {});

console.log(result);
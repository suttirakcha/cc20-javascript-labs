// LAB - 11 : Convert the currency from baht to dollar

const convertBahtToDollar = (amount) => {
  return amount / 35.36
}

let result1 = convertBahtToDollar(40);
let result2 = convertBahtToDollar(55);
let result3 = convertBahtToDollar(74.50);
let result4 = convertBahtToDollar(150);
let result5 = convertBahtToDollar(399.99);

console.log(result1, result2, result3, result4, result5);
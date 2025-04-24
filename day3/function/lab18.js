const discountPrice = (quantity, price) => {
  const total = quantity * price;
  const discount = total * 0.2;
  return total - discount;
}

let result1 = discountPrice(1, 50);
let result2 = discountPrice(3, 40);
let result3 = discountPrice(6, 100);
let result4 = discountPrice(2, 699);
let result5 = discountPrice(5, 338);

console.log(result1, result2, result3, result4, result5);
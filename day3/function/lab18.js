const discount = (price) => {
  return price * (1 - 0.2);
}

const product1 = +prompt("What price is it?");
const discountedProduct = discount(product1);

alert(discountedProduct);
function createItem(name, quantity, price, discount){
  let item = { name, quantity, price };
  if (discount > 0){
    item.discount = discount;
  }
  return item;
}

function calculateTotal(item){
  let discount = item.discount || 0;
  let priceAfterDiscount = item.price * (1 - discount / 100);

  return priceAfterDiscount * item.quantity;
}

let cart1 = createItem('Huawei P20', 2, 34000, 20);
let totalCart1 = calculateTotal(cart1);

console.log(totalCart1);
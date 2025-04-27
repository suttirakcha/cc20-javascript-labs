function calPointFromPurchase(cost){
  let point = Math.floor(cost / 100);
  console.log(`You've received ${point} point${point === 1 ? "" : "s"} from purchasing the products.`);
}

let cost1 = prompt("Enter the total");
calPointFromPurchase(cost1);
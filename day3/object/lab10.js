let result = {};

while (true){
  let fruit = prompt('Enter the fruit');
  if (fruit === 'stop') break;
  let amount = prompt(`Enter the quantity of ${fruit}`);
  if (amount === 'stop') break;
  
  if (amount > 1) fruit += "s";

  if (isNaN(amount)){
    alert("The amount should be the number");
    continue;
  }

  result[fruit] = amount;
}

console.log(result);
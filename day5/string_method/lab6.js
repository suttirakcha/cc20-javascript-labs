function extractCurrencyValue(string, rate){
  const amount = string.slice(1) * rate;
  return `THB${amount.toFixed(2)}`;
}

let val1 = extractCurrencyValue('$15', 33.52);
let val2 = extractCurrencyValue('$120', 30);

console.log(val1, val2);
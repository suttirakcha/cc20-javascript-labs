function convertToTwoDecimals(num){
  let formattedNum = Math.trunc(num * 100);
  return (formattedNum / 100).toFixed(2);
}

console.log(convertToTwoDecimals(4));
console.log(convertToTwoDecimals(5.1));
console.log(convertToTwoDecimals(3.1239));
console.log(convertToTwoDecimals(3.1289));
console.log(convertToTwoDecimals(23.4));
console.log(convertToTwoDecimals(23.43523));
console.log(convertToTwoDecimals(-2.425));
// LAB - 19 : Return one of four numbers that has the highest value

function maxOfTwo(a, b){
  return a > b ? a : b;
}

const getTheHighestValue = (num1, num2, num3, num4) => {
  const max1 = maxOfTwo(num1, num2);
  const max2 = maxOfTwo(num3, num4);
  return max1 > max2 ? max1 : max2;
}

let result1 = getTheHighestValue(4, 3, 2, 1);
let result2 = getTheHighestValue(12, 33, 14, 8);
let result3 = getTheHighestValue(45, 22, 67, 48);
let result4 = getTheHighestValue(76, 90, 102, 120);
let result5 = getTheHighestValue(-4, 9, -12, 5);

console.log(result1, result2, result3, result4, result5);
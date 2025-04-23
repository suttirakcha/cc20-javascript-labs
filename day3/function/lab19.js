// LAB - 19 : Return one of four numbers that has the highest value

const getTheHighestValue = (num1, num2, num3, num4) => {
  const isNum1Max = num1 > num2 && num1 > num3 && num1 > num4;
  const isNum2Max = num2 > num1 && num2 > num3 && num2 > num4;
  const isNum3Max = num3 > num1 && num3 > num2 & num3 > num4;
  const isNum4Max = num4 > num1 && num4 > num2 && num4 > num3;

  return isNum1Max ? num1 : isNum2Max ? num2 : isNum3Max ? num3 : isNum4Max ? num4 : 'Invalid'
}

let result1 = getTheHighestValue(4, 3, 2, 1);
let result2 = getTheHighestValue(12, 33, 14, 8);
let result3 = getTheHighestValue(45, 22, 67, 48);
let result4 = getTheHighestValue(76, 90, 102, 120);
let result5 = getTheHighestValue(-4, 9, -12, 5);

console.log(result1, result2, result3, result4, result5);
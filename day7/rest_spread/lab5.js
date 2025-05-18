function updateThirdIndexOfArray(array1){
  const newArr = [...array1];
  newArr[3] *= newArr[3];
  return newArr;
}

const arr1 = [1, 2, 8, 4, 9];

console.log(arr1);
console.log(updateThirdIndexOfArray(arr1));

console.log(arr1)
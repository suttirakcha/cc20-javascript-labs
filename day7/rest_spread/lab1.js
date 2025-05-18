function multiplyAll(...nums){
  return nums.reduce((prev, curr) => prev * curr, 0);
}

console.log(multiplyAll(2, 3, 5));
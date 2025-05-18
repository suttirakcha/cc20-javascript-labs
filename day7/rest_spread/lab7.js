function doubleAndReturnArgs(arr, ...nums){
  const numsArr = nums.map(num => num * 2);
  const combinedArr = [...arr, ...numsArr];
  console.log(combinedArr);
}

doubleAndReturnArgs([1, 2, 3], 4, 4); 
// expected result: [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4); 
// expected result: [2, 20, 8]
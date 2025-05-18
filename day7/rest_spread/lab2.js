function filterOutOdds(...nums){
  return nums.filter(num => num % 2 === 0);
}

console.log(filterOutOdds(12, 5, 8, 11, 17, 10));
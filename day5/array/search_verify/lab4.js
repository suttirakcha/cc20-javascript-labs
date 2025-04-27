const nums = [7, 9, -5, -1, 0, 3];
let result;

for (let num of nums){
  if (num < 0){
    result = num;
    break;
  }
}

console.log(result);
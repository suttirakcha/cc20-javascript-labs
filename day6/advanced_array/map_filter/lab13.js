const numbers = [5, 10, 15, 20, 25];

function filterRange(arr, a, b){
  return arr.filter(item => item > a && item < b);
}

const result = filterRange(numbers, 2, 20);
console.log(result);
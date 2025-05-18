const myArr = [12, 5, 9, 11];

function cloneArray(arr){
  return [...arr];
}

const copiedArr = cloneArray(myArr)
console.log(copiedArr);
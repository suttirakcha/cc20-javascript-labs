const arr1 = ["Hello", "What is up"];

/* Other methods for slice method 
  arr.slice()
  arr.slice(0)
  arr.slice(0, arr.length)
*/

function clone(arr){
  return arr.slice(0, arr.length);
}

const clonedArr = clone(arr1);
console.log(clonedArr)

clonedArr[0] = "WHAT?";
console.log(clonedArr);
console.log(arr1);
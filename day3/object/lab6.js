function isAnEmptyObject(obj){
  for (let _ in obj){ // If the variable is never used, you can use _ to name it
    return false
  }
  return true;
}

const obj = {};
const obj2 = {
  name: "Mark",
  age: 24
};

console.log(isAnEmptyObject(obj));
console.log(isAnEmptyObject(obj2));
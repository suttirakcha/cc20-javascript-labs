const arr = [1, 2, 3, 4, { name: "Jack" }];
const obj = [{
  name: "Jack"
}];

function isArray(input){
  return Array.isArray(input);
}

console.log(isArray(arr)); // true
console.log(isArray(obj)); // false
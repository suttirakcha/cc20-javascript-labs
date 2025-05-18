function checkEmptyObj(obj){
  if (Object.values(obj).length > 0 && Object.keys(obj).length > 0){
    return false
  }
  return true;
}

console.log(checkEmptyObj({}));
console.log(checkEmptyObj([]));
console.log(checkEmptyObj({ name: "Jack"}));
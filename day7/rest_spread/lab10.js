const myObj = {
  name: "Jack",
  age: 30
}

function cloneObject(obj){
  return {...obj};
}

const copiedObj = cloneObject(myObj);

console.log(copiedObj)
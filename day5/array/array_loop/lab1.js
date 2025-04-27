const arr = [2, 3, 5, 7, 11];

function squareArr(array){
  let values = [];
  for (let num of array){
    values.push(num * num);
  }

  console.log(values);
}

squareArr(arr);
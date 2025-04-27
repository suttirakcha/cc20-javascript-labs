const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
let indices = [];

for (let i in alphabets){
  if (alphabets[i] === "a"){
    indices.push(i);
  }
}

console.log(indices);
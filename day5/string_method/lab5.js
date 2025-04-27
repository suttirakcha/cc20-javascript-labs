function truncate(str, length){
  let text = str.slice(0, length);
  if (str.length > length){
    return text + '...';
  }
  return str;
}

let text1 = truncate("Hello, what is this thing?", 10);
let text2 = truncate("Coding is fun", 20);
let text3 = truncate("Hello, world", 12);
let text4 = truncate("Hello, worlds", 12);

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);
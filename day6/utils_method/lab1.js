// FIRST METHOD

function convertToCamelCase(text){
  const splittedWords = text.split("-");
  for (let i = 1; i < splittedTexts.length; i++){
    let words = splittedTexts[i];
    let capitalisedWords = words.charAt(0).toUpperCase() + words.slice(1);
    splittedWords.splice(i, 1, capitalisedWords);
  }
  const joinedText = splittedWords.join("");
  return joinedText;
}

let text1 = convertToCamelCase('background-color');
let text2 = convertToCamelCase('list-style-type');
console.log(text1, text2);

// SECOND METHOD

function toCamelCase(str){
  const parts = str.split("-");
  let result = parts[0];
  for (let i = 1; i < parts.length; i++){
    let word = parts[i];
    result += word[0].toUpperCase() + word.slice(1);
  }
  return result;
}

console.log(toCamelCase("background-color"));
console.log(toCamelCase("list-style-type"));
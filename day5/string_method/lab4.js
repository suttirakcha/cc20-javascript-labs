// function checkSensitiveWord(word){
//   const text = word.toUpperCase();
//   const cond =  
//     text.includes("porn".toUpperCase()) || 
//     text.includes("sex".toUpperCase()) ||
//     text.includes("xxx".toUpperCase())
//   return cond;
// }

// console.log(checkSensitiveWord("hey, this is a fun thing!"));
// console.log(checkSensitiveWord("Want to have a Sex"));

function containBannedWords(text){
  const banned = "xxx,sex,porn".toLowerCase();
  const lowerText = text.toLowerCase();
 
  return banned.includes(lowerText);
}

console.log(containBannedWords("sEx"));
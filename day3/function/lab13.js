// LAB - 13 : Calculate the score and return the grade

const getScore = () => {
  const score = +prompt("Enter your score");
  return score
}

const grade = (score) => {
  const result =
    (score >= 80 && score <= 100) ? 'A' :
    score >= 70 ? 'B' :
    score >= 60 ? 'C' :
    score >= 50 ? 'D' :
    score < 50 ? 'F' :
    score < 0 ? 'Score cannot be negative' :
    'Invalid score'

  return result;
}

const main = () => {
  const score = getScore();
  const result = grade(score);
  alert(`Your grade : ${result}`);
}

main();
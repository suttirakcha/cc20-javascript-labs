let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
let keys = Object.keys(salaries);

for (let key of keys){
  sum += salaries[key];
}

console.log(sum);

let sum2 = 0
let values = Object.values(salaries);

for (let value of values){
  sum2 += value;
}

console.log(sum2);
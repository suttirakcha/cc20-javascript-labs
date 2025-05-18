let user = {
  name: 'John',
  years: 27
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(user);
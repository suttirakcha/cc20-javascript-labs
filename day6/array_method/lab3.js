const person = ['John', 'Jay', 'Jim', 'Jame'];
person.splice(1, 1, "Jack", "Joe");

console.log(person) // Expected value: ["John", "Jack", "Joe", "Jim", "Jane"]
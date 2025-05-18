function checkUserAccess({ firstName, lastName, age }){
  console.log(age > 18 
    ? `Hello, ${firstName} ${lastName}!` 
    : "You have no access!"
  );
}

checkUserAccess({
  firstName: "Jane",
  lastName: "Doe",
  age: 15
})

checkUserAccess({
  firstName: "Dominic",
  lastName: "Toretto",
  age: 39
})

checkUserAccess({
  firstName: "Yuan",
  lastName: "Xiao",
  age: 20
})
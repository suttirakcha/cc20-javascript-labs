// LAB-10 : Mini-workshop

var user = prompt("Username");
if (user === "codecamp") {
  const password = prompt("Password");
  if (password === "123456") {
    user = "codecamp";
    alert(`Welcome to ${user}`)
  } else {
    if (password) alert('Wrong password');
    user = "";
  }
} else {
  user = "guest"
}
console.log(user);
// LAB-9 : Mini workShop
// Login feature

const username = prompt("Enter username");
if (username && username.trim()) {
  const password = prompt("Enter password");
  if (
    (username === "admin" && password === "1234") ||
    (username === "john" && password === "qwerty")
  ) {
    alert(`Hello, ${username}`);
  } else {
    alert("Invalid username or password");
  }
} else if (username === null || username.trim() === "") {
  alert("Username is required");
} else {
  alert("Password is required");
}
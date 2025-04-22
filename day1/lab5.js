const numCheck = +prompt("Enter the number");
if (numCheck){
  if (isNaN(numCheck) || numCheck.trim() === '' || numCheck === null){
    console.log("Invalid number")
  } else if (numCheck % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
} else {
  alert("You have not entered the number");
}
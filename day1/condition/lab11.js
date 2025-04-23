// LAB-11 : Ticket Price

let input = prompt("Enter your zone");
let enteredInput = input?.toUpperCase();
let notEnteredZone = "You have not entered your zone";
let output;
if (input !== null && input.trim()) {
  if (enteredInput === "AA") {
    output = 'Your price is 6,500 baht';
  } else if (enteredInput === "BB") {
    output = 'Your price is 5,000 baht';
  } else if (
    (enteredInput >= "SB" && enteredInput <= 'SN' && enteredInput.length === 2)
  ) {
    output = 'Your price is 5,500 baht'
  } else if (enteredInput >= 'B' && enteredInput <= 'T' && enteredInput.length === 1) {
    output = 'Your price is 4,000 baht'
  } else if (enteredInput === "") {
    output = notEnteredZone
  } else {
    output = "No selected zone";
  }
} else {
  output = notEnteredZone;
}
alert(output);
// LAB - 4 : Design Token

let tokenName = prompt("Enter the design token");
let tokenValue;

switch (tokenName){
  case "color-primary-500":
    tokenValue = "#3498db";
    break;
  case "color-secondary-500":
    tokenValue = "#2ecc71";
    break;
  case "text-color":
    tokenValue = "#333333";
    break;
  case "font-base":
  case "spacing-medium":
    tokenValue = "16px";
    break;
  case "font-weight-light":
    tokenValue = "300";
    break;
  case "font-weight-regular":
    tokenValue = "400";
    break;
  case "font-weight-bold":
    tokenValue = "700";
    break;
  case "spacing-small":
  case "border-radius-medium":
    tokenValue = "8px";
    break;
  case "spacing-large":
    tokenValue = "24px";
    break;
  case "border-radius-small":
    tokenValue = "4px";
    break;
  case "border-radius-large":
    tokenValue = "12px";
    break;
  default:
    alert(`Design token ${tokenName} not found`);
    break;
}

if (tokenValue !== undefined){
  alert(tokenValue);
}
// LAB - 3 : Refactor Switch to If-Else Statement

let browser = prompt("Select the browser");
browser = browser.trim();
browser = browser.charAt(0).toUpperCase() + browser.slice(1).toLowerCase();

if (browser === 'Edge'){
  alert("You've got the Edge!");
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
){
  alert("Okay we support these browsers too")
} else {
  alert('We hope that this page looks ok!');
}
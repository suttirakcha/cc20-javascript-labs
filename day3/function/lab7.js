// LAB - 7 : Convert hours to minutes

const convertHoursToMinutes = (hours) => {
  return hours * 60;
}

let result1 = convertHoursToMinutes(1);
let result2 = convertHoursToMinutes(5);
let result3 = convertHoursToMinutes(8);
let result4 = convertHoursToMinutes(24);
let result5 = convertHoursToMinutes(60);

console.log(result1, result2, result3, result4, result5);
// LAB - 10 : Convert Buddhist year to Christian year

const convertBuddhistYearToChristianYear = (year) => {
  return year - 543;
}

let result1 = convertBuddhistYearToChristianYear(2568);
let result2 = convertBuddhistYearToChristianYear(2554);
let result3 = convertBuddhistYearToChristianYear(2530);
let result4 = convertBuddhistYearToChristianYear(2500);
let result5 = convertBuddhistYearToChristianYear(2455);

console.log(result1, result2, result3, result4, result5);
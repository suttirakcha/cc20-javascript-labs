const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
const result1 = array1.filter(item => item[0] === 'E');

console.log(result1);

// const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];

// const result2 = array2.filter(item => item.includes(item.toLowerCase()));

// console.log(result2);

const array3 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
const result3 = array3.filter(item => item.toUpperCase().includes('buri'.toUpperCase()));

console.log(result3);
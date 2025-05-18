let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];

/* There are three methods to remove all values from the 'fish' array using splice method
  1. fish.splice(0)
  2. fish.splice(0, 4)
  3. fish.splice(0, fish.length)
*/

fish.splice(0);

console.log(fish); // expected value: []
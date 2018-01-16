'use strict';
let stuff = [1, 3, 5, 7, 9];

function average(numbers) {
  let total = 0;
  numbers.forEach(number => (total += number));
  return total / numbers.length;
}

console.log(average(stuff));

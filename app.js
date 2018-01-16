'use strict';
const stuff = [1, 3, 5, 7];

function max(numbers) {
  let i = 0;
  let presentMax = numbers[0];
  let maxNum = 0;
  while (i < numbers.length) {
    if (numbers[i] > presentMax) {
      presentMax = numbers[i];
    }
    maxNum = presentMax;
    i++;
  }
  return maxNum;
}

function min(numbers) {
  let i = 0;
  let presentMin = numbers[0];
  let minNum = 0;
  while (i < numbers.length) {
    if (numbers[i] < presentMin) {
      presentMin = numbers[i];
    }
    minNum = presentMin;
    i++;
  }
  return minNum;
}



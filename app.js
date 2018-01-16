'use strict';
// let stuff = [1, 3, 5, 7];

// function max(numbers) {
//   let i = 0;
//   let presentMax = numbers[0];
//   let maxNum = 0;
//   while (i < numbers.length) {
//     if (numbers[i] > presentMax) {
//       presentMax = numbers[i];
//     }
//     maxNum = presentMax;
//     i++;
//   }
//   return maxNum;
// }

// function min(numbers) {
//   let i = 0;
//   let presentMin = numbers[0];
//   let minNum = 0;
//   while (i < numbers.length) {
//     if (numbers[i] < presentMin) {
//       presentMin = numbers[i];
//     }
//     minNum = presentMin;
//     i++;
//   }
//   return minNum;
// }

// function average(numbers) {
//   let total = 0;
//   numbers.forEach(number => (total += number));
//   return total / numbers.length;
// }

// average(stuff);

// //Problem 1

// function repeat(fn, n) {
//   for (let i = 0; i < n; i++) {
//     fn();
//   }
// }

// function hello(){
//   console.log('Hello world');
// };

// function goodbye(){
//   console.log('Goodbye world');
// };

// repeat(hello, 5);
// repeat(goodbye, 5);

// //Problem 2

// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray', 'Raymundo'];

// const filteredNames = filter(myNames, function (name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES


// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) { 

//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if ((fn(arr[i][0]) === true)) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filter(myNames));


// //Problem 3

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const avalancheWarning = hazardWarningCreator('Watch out for snow!');
// const earthquakeWarning = hazardWarningCreator('The ground is shaking!');

// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;
//   return function(location) {
//     warningCounter++;
//     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
//   };
// }

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Olympic and La Brea');
// rocksWarning('Wilshire and Western');

// avalancheWarning('Hollywood and Vine');
// avalancheWarning('Hollywood and Orange');

// earthquakeWarning('Cowesett and Cochran');
// earthquakeWarning('Chapin and Armory');


// // Now let's invoke hazardWarningCreator three times, catching the returned function in separate variables, such as:
// // const rocksWarning = hazardWarningCreator('Rocks on the Road');
// // (you create two more of your choice)


//Problem 4

// [turtleStepsFwd, turtleStepslft]

const testArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// #1: Use the filter method to remove any items where the turtle moves backwards or to the right
//remove negatives 
// (i.e.where either the first of second number is an item is negative).

console.log(testArray.filter(value => value[0] >= 0 && value[1] >= 0));

// #2: Use the map method to create a new array containing how many steps the turtle makes in total with each movement
//(i.e.the first and second number added together).

console.log(testArray.map(value => (Math.abs(value[0]) + Math.abs(value[1]))));

// #3: Use the forEach method to log out how many steps the turtle took in each case.

console.log(testArray.forEach(value => ))
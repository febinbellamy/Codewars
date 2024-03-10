/* 
5 kyu

Write a function which will accept a sequence of numbers and calculate the variance for the sequence.

The variance for a set of numbers is found by subtracting the mean from every value, squaring the results, adding them all up and dividing by the number of elements.

For example, in pseudo code, to calculate the variance for [1, 2, 2, 3].

mean = (1 + 2 + 2 + 3) / 4
=> 2

variance = ((1 - 2)^2 + (2 - 2)^2 + (2-2)^2 + (3 - 2)^2)  /  4
=> 0.5

The results are tested after being rounded to 4 decimal places using Javascript's toFixed method.
*/

// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
var variance = function (numbers) {
  let mean = numbers.reduce((a, c) => a + c, 0) / numbers.length;
  const squaredResults = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    let squaredResult = (currentNum - mean) ** 2;
    squaredResults.push(squaredResult);
  }
  let sumOfSquaredResults = squaredResults.reduce((a, c) => a + c, 0);
  return sumOfSquaredResults / squaredResults.length;
};

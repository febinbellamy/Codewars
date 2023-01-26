/*
7 kyu

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

function cubeOdd(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    //The current number/element in the array
    let currentElement = arr[i];

    // if any of the elements aren't numbers, return undefined
    if (typeof currentElement !== "number") return undefined;

    if (currentElement % 2 !== 0) {
      // if the number is odd,
      sum += currentElement ** 3; // cube it and add it to the sum.
    }
  }
  return sum;
}

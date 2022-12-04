/* 
6 kyu

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s
*/

function pyramid(n) {
  if (n === 0) return [];

  const finalArray = [];
  let numOfArrays = 0;

  while (numOfArrays < n) {
    let tempArr = [];
    let counter = 0;
    while (counter <= numOfArrays) {
      tempArr.push(1);
      counter++;
    }
    finalArray.push(tempArr);
    numOfArrays++;
  }
  return finalArray;
}

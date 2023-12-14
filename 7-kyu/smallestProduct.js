/* 
7 kyu

Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

Example
input = [
  [1, 5],
  [2],
  [-1, -3]
]

result = 2
*/

function smallestProduct(arr) {
  // Code goes here
  let smallestTotal = arr[0].reduce((a, c) => a * c, 1);

  for (let i = 1; i < arr.length; i++) {
    let currentSubArray = arr[i];
    let product = currentSubArray.reduce((a, c) => a * c, 1);
    if (product < smallestTotal) smallestTotal = product;
  }
  return smallestTotal;
}

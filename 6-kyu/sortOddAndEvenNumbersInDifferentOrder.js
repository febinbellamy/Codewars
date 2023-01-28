/* 
6 kyu

You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:
[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]
*/

function sortArray(array) {
  if (array.length === 0) return array;

  const oddNums = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  const evenNums = array.filter((num) => num % 2 === 0).sort((a, b) => b - a);

  let oddNumIndex = 0;
  let evenNumIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i] = evenNums[evenNumIndex];
      evenNumIndex++;
    } else if (array[i] % 2 !== 0) {
      array[i] = oddNums[oddNumIndex];
      oddNumIndex++;
    }
  }
  return array;
}

/* 
7 kyu

Write a program that outputs the top n elements from a list.

Example:
largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

function largest(n, array) {
  if (n === 0) return [];

  const finalArr = [];

  array.sort((a, b) => b - a);

  for (let i = 0; i < array.length; i++) {
    finalArr.unshift(array[i]);
    if (i + 1 === n) break;
  }

  return finalArr;
}

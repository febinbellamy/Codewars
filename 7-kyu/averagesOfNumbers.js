/* 
7 kyu

#Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:
Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]

If the array has 0 or 1 values or is null, your method should return an empty array.

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/

function averages(numbers) {
  if (!numbers || numbers.length <= 1) return [];

  let firstPointer = 0;
  let secondPointer = 1;

  const finalArr = [];

  while (secondPointer < numbers.length) {
    let average = (numbers[firstPointer] + numbers[secondPointer]) / 2;
    finalArr.push(average);
    firstPointer++;
    secondPointer++;
  }

  return finalArr;
}

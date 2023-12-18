/* 
7 kyu

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
  const numFrequency = {};

  for (let i = 0; i < numList.length; i++) {
    let currentNum = numList[i];
    if (numFrequency.hasOwnProperty(currentNum)) {
      numFrequency[currentNum]++;
    } else {
      numFrequency[currentNum] = 1;
    }
  }
  let sum = 0;
  for (let key in numFrequency) {
    if (numFrequency[key] === 1) {
      sum += Number(key);
    }
  }
  return sum;
}

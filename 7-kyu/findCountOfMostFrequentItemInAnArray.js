/* 
7 kyu

Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example:
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 

The most frequent number in the array is -1 and it occurs 5 times.
*/

function mostFrequentItemCount(collection) {
  // Do your magic. :)

  if (collection.length === 0) return 0;

  const freqCounter = {};

  for (let num of collection) {
    if (freqCounter[num]) {
      freqCounter[num]++;
    } else {
      freqCounter[num] = 1;
    }
  }

  return Math.max(...Object.values(freqCounter));
}

/* 
7 kyu

Give you an array arr that contains some number elements, find out the peaks and valleys in the array, and return them.

What do the peaks and valleys mean? If an element is larger than the three one on the left and larger than the three one on the right, we call it a peak. In contrast, an element is smaller than the value of the three elements(left and right), we call it a valley. an example:
[10,20,30,40,30,20,10,11,12,13,14,15,16,15,14,13]

In the example above, peaks and valleys are:
[10,20,30,40,30,20,10,11,12,13,14,15,16,15,14,13]
[         40   ,   10        ,       16         ]

Some examples:
peakAndValley([10,20,30,40,30,20,10,11,12,13,14,15,16,15,14,13]) 
should return [40,10,16]

peakAndValley([50,84,49,47,80,87,87,53,76,30,10])
should return [47]

peakAndValley([45,94,41,76,29,96,28,13,84,69,25])
should return [96,13]

peakAndValley([1,16,63,78,53,78,42,39,46,88,49,96,58,82])
should return [39]

peakAndValley([45,75,47,44,93,95,31,99,49,48,76,2,92,23,26,19,60,45,51])
should return [31,99,2,92,19]

peakAndValley([49,97,76,56,96,88,65,20,14,93,32])
should return []
*/

function peakAndValley(arr) {
  //coding here...
  const result = [];
  for (let i = 3; i < arr.length - 3; i++) {
    let currentNum = arr[i];
    if (
      currentNum > arr[i - 1] &&
      currentNum > arr[i - 2] &&
      currentNum > arr[i - 3] &&
      currentNum > arr[i + 1] &&
      currentNum > arr[i + 2] &&
      currentNum > arr[i + 3]
    ) {
      result.push(currentNum);
    } else if (
      currentNum < arr[i - 1] &&
      currentNum < arr[i - 2] &&
      currentNum < arr[i - 3] &&
      currentNum < arr[i + 1] &&
      currentNum < arr[i + 2] &&
      currentNum < arr[i + 3]
    ) {
      result.push(currentNum);
    }
  }
  return result;
}

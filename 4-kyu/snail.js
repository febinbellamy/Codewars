/* 
4 kyu

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]


For better understanding, please follow the numbers of the next array consecutively:
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

snail = function (array) {
  if (array.length === 0) return [];
  if (array.length === 1) return array[0];
  const finalArr = [];

  let traverseRightStartingIdx = 0;
  let traverseRightEndingIdx = array.length - 1;

  let traverseLeftStartingIdx = array.length - 1;
  let traverseLeftEndingIdx = 0;

  let traverseDownStartingIdx = 0;
  let traverseDownEndingIdx = array.length - 1;

  let traverseUpStartingIdx = array.length - 1;
  let traverseUpEndingIdx = 1;

  while (traverseRightStartingIdx <= traverseRightEndingIdx) {
    // traverse right
    let idxRight = traverseRightStartingIdx;
    while (idxRight <= traverseRightEndingIdx) {
      let currentElem = array[traverseRightStartingIdx][idxRight];
      idxRight++;
      finalArr.push(currentElem);
    }
    traverseRightEndingIdx--;
    traverseRightStartingIdx++;

    // traverse down
    let idxDown = traverseDownStartingIdx + 1;
    while (idxDown <= traverseDownEndingIdx) {
      let currentElem = array[idxDown][idxRight - 1];
      idxDown++;
      finalArr.push(currentElem);
    }
    traverseDownEndingIdx--;
    traverseDownStartingIdx++;

    // traverse left
    let idxLeft = traverseLeftStartingIdx - 1;
    while (idxLeft >= traverseLeftEndingIdx) {
      let currentElem = array[traverseLeftStartingIdx][idxLeft];
      idxLeft--;
      finalArr.push(currentElem);
    }
    traverseLeftEndingIdx++;
    traverseLeftStartingIdx--;

    // traverse up
    let idxUp = traverseUpStartingIdx - 1;
    while (idxUp >= traverseUpEndingIdx) {
      let currentElem = array[idxUp][traverseUpEndingIdx - 1];
      idxUp--;
      finalArr.push(currentElem);
    }
    traverseUpEndingIdx++;
    traverseUpStartingIdx--;
  }
  return finalArr;
};

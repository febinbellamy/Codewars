/* 
6 kyu

Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

E.g
selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]

if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]
 
selReverse(array, length)
- array - array to reverse
- length - length of each portion to reverse

Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.
*/

function selReverse(array, length) {
  // your code here

  if (length === 0) return array;
  const finalArr = [];
  let pointer1 = 0;
  let pointer2 = length - 1;

  while (pointer2 < array.length) {
    let portionOfArrReversed = array.slice(pointer1, pointer2 + 1).reverse();
    finalArr.push(...portionOfArrReversed);
    pointer1 += length;
    pointer2 += length;
  }

  if (finalArr.length !== array.length) {
    let remainingElementsReversed = array
      .slice(array.length - (array.length % length))
      .reverse();
    finalArr.push(...remainingElementsReversed);
  }
  return finalArr;
}

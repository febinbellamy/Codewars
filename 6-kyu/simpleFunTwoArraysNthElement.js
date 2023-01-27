/* 
6 kyu

Given two sorted arrays of integers(array1 and array2) and an integer n, find the nth (0-based) element of their sorted union.

In order to prevent brute force, array1 and array2 may contain 1000000 elements. ;-)

Input/Output
[input] integer array array1

Sorted array of distinct integers(negative, positive or zero).

0 ≤ array1.length ≤ 1000000

[input] integer array array2

Sorted array of distinct integers(negative, positive or zero).

It is guaranteed that no integer is contained in both array1 and array2.

0 ≤ array2.length ≤ 1000000

[input] integer n

Non-negative integer less than the summary size of array1 and array2.

0 ≤ n < array1.length + array2.length

[output] an integer

The nth element(0-based).

Example
For array1 = [1, 3, 4], array2 = [2, 6, 8] and n = 5, the output should be 8.

Sorted union of array1 and array2 is [1, 2, 3, 4, 6, 8]. The 5th element is 8.
*/

function twoArraysNthElement(array1, array2, n) {
  //coding and coding..
  function mergeArr(array1, array2) {
    let sorted = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        sorted.push(array1[i]);
        i++;
      } else {
        sorted.push(array2[j]);
        j++;
      }
    }
    while (i < array1.length) {
      sorted.push(array1[i]);
      i++;
    }
    while (j < array2.length) {
      sorted.push(array2[j]);
      j++;
    }
    return sorted;
  }
  return mergeArr(array1, array2)[n];
}

/* 
8 kyu

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/
function invert(array) {
  if (array.length === 0) return [];
  return array.map((num) => (num < 0 ? Math.abs(num) : -num));
}

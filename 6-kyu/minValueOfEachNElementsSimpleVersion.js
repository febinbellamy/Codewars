/* 
6 kyu

Complete function minValue (min_value in Ruby). Two arguments will be given:

- arr: An array that contains some integers(positve,negative or zero).
- n: A positive integer. n <= arr.length.

Your task is to find the minimum value of each n adjacent elements in arr. Returns by a new array. For example:

arr = [1,2,3,10,-5], n = 2
The min value of each 2 adjacent elements are:
[(1,2)...] --> 1
[.(2,3)..] --> 2
[..(3,10).] --> 3
[...(10,-5)] --> -5
minValue(arr,n) === [1,2,3,-5]

Some Examples
minValue([1,-2,3,-4,5,-6,7,8],1) === [1,-2,3,-4,5,-6,7,8]
minValue([1,-2,3,-4,5,-6,7,8],2) === [-2,-2,-4,-4,-6,-6,7]
minValue([1,-2,3,-4,5,-6,7,8],3) === [-2,-4,-4,-6,-6,-6]
minValue([1,-2,3,-4,5,-6,7,8],4) === [-4,-4,-6,-6,-6]
*/

function minValue(arr, n) {
  //coding and coding..

  let pointer1 = 0;
  let pointer2 = n - 1;
  const minValues = [];

  while (pointer2 < arr.length) {
    let values = arr.slice(pointer1, pointer2 + 1);
    let minValue = Math.min(...values);
    minValues.push(minValue);
    pointer1++;
    pointer2++;
  }
  return minValues;
}

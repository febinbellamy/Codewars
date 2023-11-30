/* 
7 kyu

You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.
*/

function matchArrays(v, r) {
  return r.filter((num) => v.includes(num)).length;
}

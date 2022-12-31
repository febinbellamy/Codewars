/* 
7 kyu

Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

var flatten = function (array) {
  // TODO: Program me

  // IF array is not a 2d array, return it
  const filteredArr = array.filter((element) => !Array.isArray(element));
  if (array.length === filteredArr.length) return array;

  const finalArr = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      finalArr.push(...array[i]);
    }
  }
  return finalArr;
};

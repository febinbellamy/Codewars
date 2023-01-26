/* 
6 kyu

JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

See some examples:
var arrayToSearch = [[1,2],[3,4],[5,6]];
var query = [1,2]; // => 0
query = [5,6]; // => 2
query = [9,2]; // => -1

You will be required to validate the inputs on the following criteria:
- each element of the array to be searched should be an array;
- each sub-array in the two-dimensional array should be of length two; and
- query should be an array of length two.

If the inputs are not valid you should throw an Error.

See some examples:
var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
arrayToSearch = [1,2,3,4,5,6]; // => throw Error
arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
var query = [1,2]; // => valid input
query = 5; // => throw Error
query = [9,2,1]; // => throw Error
*/

var searchArray = function (arrayToSearch, query) {
  // TODO your code here

  if (query.length !== 2) throw "Error!";
  if (!Array.isArray(arrayToSearch[0])) throw "Error!";

  const checkLength = arrayToSearch
    .map((array) => array.length)
    .sort((a, b) => b - a);

  if (checkLength[0] > 2 || checkLength[0] < 2) throw "Error!";

  const filteredArr = arrayToSearch
    .map((array, index) =>
      array[0] === query[0] && array[1] === query[1] ? index : ""
    )
    .sort()
    .filter((elem) => elem !== "");

  if (filteredArr.length === 0) {
    return -1;
  }
  return filteredArr[0];
};

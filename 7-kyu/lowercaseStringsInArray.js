/* 
7 kyu

Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

Example
arrayLowerCase(['Red', 'Green']) == ['red', 'green']
arrayLowerCase([1, 'Green']) == [1, 'green']
*/

function arrayLowerCase(arr) {
  // return array of strings in lowercase
  return arr.map((elem) =>
    typeof elem === "string" ? elem.toLowerCase() : elem
  );
}

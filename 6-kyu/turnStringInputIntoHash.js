/* 
6 kyu

Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"

This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/

function strToHash(str) {
  // ...
  if (!str) return {};

  const arr = str.split(",");
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i].trim().split("=");
    let key = currentElem[0];
    let value = +currentElem[currentElem.length - 1];
    hash[key] = value;
  }

  return hash;
}

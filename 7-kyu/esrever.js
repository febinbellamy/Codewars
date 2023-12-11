/* 
7 kyu

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

reverse = function (array) {
  // TODO: program me!
  const reversedArr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }

  return reversedArr;
};

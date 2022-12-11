/* 
7 kyu

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
  // Implement me!

  const keys = [];
  const values = [];

  for (let i = 0; i < text.length; i++) {
    let currentChar = text[i];

    if (!keys.includes(currentChar)) {
      keys.push(currentChar);
      values.push(1);
    } else {
      let indexOfKey = keys.indexOf(currentChar);
      values[indexOfKey] += 1;
    }
  }

  const finalArr = [];

  for (let j = 0; j < values.length; j++) {
    let newArr = [];
    newArr.push(keys[j]);
    newArr.push(values[j]);
    finalArr.push(newArr);
  }

  return finalArr;
};

/* 
7 kyu

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str) {
  const frequencyObj = {};

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i].toLowerCase();
    if (frequencyObj[currentChar]) {
      frequencyObj[currentChar]++;
    } else {
      frequencyObj[currentChar] = 1;
    }
  }
  const filteredVals = Object.values(frequencyObj).filter((val) => val > 1);

  return filteredVals.length ? false : true;
}

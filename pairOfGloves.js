/* 
6 kyu

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
  const freqCounter = {};

  for (let glove of gloves) {
    if (freqCounter[glove]) {
      freqCounter[glove]++;
    } else {
      freqCounter[glove] = 1;
    }
  }

  const objValues = Object.values(freqCounter).map((num) => parseInt(num / 2));
  if (objValues.length === 1) return objValues[0];
  return objValues.reduce((a, c) => a + c);
}

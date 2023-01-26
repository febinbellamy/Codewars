/* 
7 kyu

Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:
[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]

The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

Examples:
[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
] // => "Just Live Life Man"

[ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ]
] // => "The Mitochondria is the powerhouse of the cell"
*/

function arrAdder(arr) {
  let finalStr = "";

  const maxLength = [...arr].sort((a, b) => b.length - a.length)[0].length;
  let indexInArray = 0;
  let index = 0;
  let loopThroughAllArrays = 0;

  while (loopThroughAllArrays < maxLength) {
    finalStr += arr[index][indexInArray];
    index++;
    if (index === arr.length) {
      loopThroughAllArrays++;
      indexInArray++;
      loopThroughAllArrays !== maxLength ? (finalStr += " ") : (finalStr += "");
      index = 0;
    }
  }
  return finalStr;
}

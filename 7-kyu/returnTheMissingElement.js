/* 
7 kyu

Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

function getMissingElement(superImportantArray) {
  //TODO
  const foundElements = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  };
  for (let i = 0; i < superImportantArray.length; i++) {
    let currentElement = superImportantArray[i];
    if (currentElement in foundElements) foundElements[currentElement] = true;
  }
  for (let key in foundElements) {
    if (foundElements[key] === false) return +key;
  }
}

/* 
6 kyu

Dear Coder,

We at [SomeLargeCompany] have decided to expand on the functionality of our online text editor.

We have written a new function that accepts a phrase, a word and an array of indexes. We want this function to return the phrase, with the word inserted at each of the indexes given by the array.

However, our current function only gets the first insertion right, but all of the following ones are out of place!

Please fix this for us, and you will be showered with money.

Yours Sincerely, [SomeLargeCompany]

Note:
- the indicies are always in range and passed as a sorted array
- note if the index array is empty, just return the initial phrase
*/

function insertAtIndexes(phrase, word, indexes) {
  const phraseArr = phrase.split("");
  let addToIndex = 0;

  for (let i = 0; i < indexes.length; i++) {
    let currentIndexToInsertWord = indexes[i];
    phraseArr.splice(
      currentIndexToInsertWord + addToIndex,
      0,
      ...word.split("")
    );
    addToIndex += word.length;
  }
  return phraseArr.join("");
}

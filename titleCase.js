/* 
6 kyu

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.

Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  if (!title) return title;
  const titleArrOfWords = title.split(" ");

  if (!minorWords) {
    for (let i = 0; i < titleArrOfWords.length; i++) {
      let currentWord = titleArrOfWords[i];
      let firstLetterCurrWord = titleArrOfWords[i][0];
      let lowerCasedCurrentWord = currentWord.toLowerCase();
      let newStr =
        firstLetterCurrWord.toUpperCase() + currentWord.toLowerCase().slice(1);
      titleArrOfWords[i] = newStr;
    }
  } else {
    const lowerCasedMinorWords = minorWords
      .split(" ")
      .map((word) => word.toLowerCase());

    for (let i = 0; i < titleArrOfWords.length; i++) {
      let currentWord = titleArrOfWords[i];
      let firstLetterCurrWord = titleArrOfWords[i][0];
      let lowerCasedCurrentWord = currentWord.toLowerCase();
      let newStr;

      if (
        !lowerCasedMinorWords.includes(lowerCasedCurrentWord) ||
        (lowerCasedMinorWords.includes(lowerCasedCurrentWord) && i === 0)
      ) {
        newStr =
          firstLetterCurrWord.toUpperCase() +
          currentWord.toLowerCase().slice(1);
        titleArrOfWords[i] = newStr;
      } else {
        newStr = lowerCasedCurrentWord.slice(0);
        titleArrOfWords[i] = newStr;
      }
    }
  }
  return titleArrOfWords.join(" ");
}

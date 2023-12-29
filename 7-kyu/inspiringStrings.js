/* 
7 kyu

When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:
'red white blue' //returns string value of white
'red blue gold' //returns gold
*/

function longestWord(stringOfWords){
    //Give me back the longest word!
    const arrOfWords = stringOfWords.split(' ');
    const lengthsOfWords = arrOfWords.map((word) => word.length);
    const maxLength = Math.max(...lengthsOfWords);
    return arrOfWords[lengthsOfWords.lastIndexOf(maxLength)]
  }
  
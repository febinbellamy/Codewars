/* 
7 kyu

Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true

It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.
*/

var mispelled = function (word1, word2) {
  let longerWord;
  let shorterWord;
  let countDifferentLetters = 0;

  if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) countDifferentLetters++;
    }
    return countDifferentLetters > 1 ? false : true;
    
  } else if (word1.length > word2.length) {
    longerWord = word1;
    shorterWord = word2;
  } else {
    longerWord = word2;
    shorterWord = word1;
  }

  if (
    longerWord[0] + shorterWord === longerWord ||
    shorterWord + longerWord[longerWord.length - 1] === longerWord
  ) {
    return true;
  }

  for (let j = 0; j < longerWord.length; j++) {
    if (longerWord[j] !== shorterWord[j]) countDifferentLetters++;
  }
  return countDifferentLetters > 1 ? false : true;
};

/* 
5 kyu

Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".
"hello" => "ellohay"
"creating" => "eatingcray"

If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.
"algorithm" => "algorithmway"

This problem is different from other variations in that it expects casing to remain the same so:
"Hello World" => "Ellohay Orldway"

as well as punctuation.
"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"

Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.
*/

function translate(sentence) {
  function findIndexOfFirstPunctuation(word) {
    let indexOfFirstPunctuation = word.length;
    for (let k = 0; k < word.length; k++) {
      if (/[^a-zA-Z0-9]/.test(word[k])) {
        indexOfFirstPunctuation = k;
        break;
      }
    }
    return indexOfFirstPunctuation;
  }

  function findIndexOfFirstVowel(word) {
    let indexOfFirstVowel = word.length;
    for (let j = 0; j < word.length; j++) {
      if (/[aeiou]/.test(word[j])) {
        indexOfFirstVowel = j;
        break;
      }
    }
    return indexOfFirstVowel;
  }

  const splitStr = sentence.split(" ");
  const result = [];
  for (let i = 0; i < splitStr.length; i++) {
    let currentWord = splitStr[i];

    // if the first letter IS a vowel,
    if (/[aeiouAEIOU]/.test(currentWord[0])) {
      // Find the first punctuation:
      let punctuation = "";
      let indexOfFirstPunctuation = findIndexOfFirstPunctuation(currentWord);

      if (indexOfFirstPunctuation !== currentWord.length) {
        punctuation = currentWord.slice(indexOfFirstPunctuation);
      }
      // add "way" to the end of the word, add punctuation if any, then and move on to next word
      let finalWord =
        currentWord.slice(0, indexOfFirstPunctuation) + "way" + punctuation;
      result.push(finalWord);
    } else {
      // if the first letter is NOT a vowel...

      // the first letter MAY or MAY NOT be capitalized. CHECK!
      let firstLetter = currentWord[0];
      let firstLetterIsCapitalized = firstLetter.toUpperCase() === firstLetter;

      // Find the first vowel:
      let indexOfFirstVowel = findIndexOfFirstVowel(currentWord);

      // then take the cosonants before the first vowel and add to the end of the word. Then add "ay" and puncutation (if any)
      let consonants =
        firstLetter.toLowerCase() + currentWord.slice(1, indexOfFirstVowel);

      // If firstLetterIsCapitalized is true, the new first letter (the vowel) should be capitalized.
      let firstVowel = firstLetterIsCapitalized
        ? currentWord[indexOfFirstVowel].toUpperCase()
        : currentWord[indexOfFirstVowel];

      // check the word for punctuation
      let punctuation = "";
      let indexOfFirstPunctuation = findIndexOfFirstPunctuation(currentWord);

      if (indexOfFirstPunctuation !== currentWord.length) {
        punctuation = currentWord.slice(indexOfFirstPunctuation);
      }

      let newWordPartOne =
        firstVowel +
        currentWord.slice(indexOfFirstVowel + 1, indexOfFirstPunctuation);
      let newWordPartTwo = consonants + "ay" + punctuation;
      result.push(newWordPartOne + newWordPartTwo);
    }
  }
  return result.join(" ");
}

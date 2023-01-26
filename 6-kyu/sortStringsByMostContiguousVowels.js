/* 
6 kyu

The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:
str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.
*/

function sortStringsByVowels(strings) {
  let mainIndex = 0;
  const finalArr = [];

  while (mainIndex < strings.length) {
    let currentWord = strings[mainIndex];
    let secondIndex = 0;

    let tempStr = "";
    let tempArr = [];

    // find the longest sub-string of contiguous vowels
    while (secondIndex < currentWord.length) {
      let currentLetter = currentWord[secondIndex];

      // if its a vowel, add it to temp.
      if (/[aeiou]/gi.test(currentLetter)) {
        tempStr += currentLetter;
      } else {
        if (tempStr.length > 0) {
          tempArr.push(tempStr.length);
        }
        tempStr = "";
      }
      if (secondIndex === currentWord.length - 1 && tempStr.length > 0) {
        tempArr.push(tempStr.length);
      }
      secondIndex++;
    }

    const obj = {};

    obj["string"] = currentWord;
    obj["longestSubstringLength"] = Math.max(...tempArr);
    finalArr.push(obj);

    mainIndex++;
  }

  finalArr.sort((a, b) => {
    if (a.longestSubstringLength > b.longestSubstringLength) return -1;
    if (a.longestSubstringLength < b.longestSubstringLength) return 1;
    if (strings.indexOf(a.string) < strings.indexOf(b.string)) return -1;
    if (strings.indexOf(a.string) > strings.indexOf(b.string)) return 1;
  });

  return finalArr.map((obj) => obj.string);
}

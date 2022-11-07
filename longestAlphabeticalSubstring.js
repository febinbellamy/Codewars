/* 
6 kyu

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)
*/

function longest(str) {
  // Good luck :)

  if (str.length === 1) return str[0];

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const longestSubstrings = [];
  const longestSubstringLengths = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (i === 0) {
      temp += currentChar;
      continue;
    }
    if (
      alphabet.indexOf(currentChar) > alphabet.indexOf(temp[temp.length - 1]) ||
      alphabet.indexOf(currentChar) === alphabet.indexOf(temp[temp.length - 1])
    ) {
      temp += currentChar;
      if (i === str.length - 1) {
        longestSubstrings.push(temp);
        longestSubstringLengths.push(temp.length);
      }
    } else {
      longestSubstrings.push(temp);
      longestSubstringLengths.push(temp.length);
      temp = currentChar;
    }
  }

  const sortedByLongestLength = longestSubstrings.sort(
    (a, b) => b.length - a.length
  );
  return sortedByLongestLength[0];
}

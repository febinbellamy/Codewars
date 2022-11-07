function longest(str) {
  // Good luck :)

  if (str.length === 1) return str[0];

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const longestSubstrings = [];
  const longestSubstringLengths = [];
  let temp = "";
  let tempIndexOf;

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

  const longestLength = Math.max(...longestSubstringLengths);
  const sortedByLongestLength = longestSubstrings.sort(
    (a, b) => b.length - a.length
  );
  return sortedByLongestLength[0];
}

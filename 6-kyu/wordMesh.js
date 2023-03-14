/* 
6 kyu

You will be given an array of strings. The words in the array should mesh together where one or more letters at the end of one word will have the same letters (in the same order) as the next word in the array. But, there are times when all the words won't mesh.

Examples of meshed words:

"apply" and "plywood"

"apple" and "each"

"behemoth" and "mother"

Examples of words that do not mesh:

"apply" and "playground"

"apple" and "peggy"

"behemoth" and "mathematics"

If all the words in the given array mesh together, then your code should return the meshed letters in a string. You should return the longest common substring. You won't know how many letters the meshed words have in common, but it will be at least one.

If any pair of consecutive words fails to mesh, your code should return "failed to mesh".

Input: An array of strings. There will always be at least two words in the input array.

Output: Either a string of letters that mesh the words together or the string "failed to mesh".

Examples
#1: ["allow", "lowering", "ringmaster", "terror"] --> "lowringter"

because:
- the letters "low" in the first two words mesh together
- the letters "ring" in the second and third word mesh together
- the letters "ter" in the third and fourth words mesh together.

#2: ["kingdom", "dominator", "notorious", "usual", "allegory"] --> "failed to mesh"

Although the words "dominator" and "notorious" share letters in the same order, the last letters of the first word don't mesh with the first letters of the second word.
*/

function wordMesh(arr) {
  let longestCommonSubString = "";
  let index = 0;

  while (index < arr.length - 1) {
    let currentWord = arr[index];
    let nextWord = arr[index + 1];

    let currentLetterIndex = 0;
    let foundLongestSubString = false;

    while (currentLetterIndex < currentWord.length) {
      let currentSubstr = currentWord.slice(currentLetterIndex);
      if (nextWord.startsWith(currentSubstr)) {
        longestCommonSubString += currentSubstr;
        foundLongestSubString = true;
        break;
      }
      currentLetterIndex++;
    }
    if (!foundLongestSubString) return "failed to mesh";
    index++;
  }
  return longestCommonSubString;
}

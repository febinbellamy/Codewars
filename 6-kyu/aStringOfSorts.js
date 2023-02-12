/* 
6 kyu

Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"

To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/

function sortString(string, ordering) {
  let orderingWithDuplicatesRemoved = "";
  for (let i = 0; i < ordering.length; i++) {
    let currentChar = ordering[i];
    if (!orderingWithDuplicatesRemoved.includes(currentChar)) {
      orderingWithDuplicatesRemoved += currentChar;
    }
  }

  let finalStr = "";
  let indexOfOrdering = 0;
  const strArr = string.split("");

  while (indexOfOrdering < orderingWithDuplicatesRemoved.length) {
    let chars = strArr
      .filter((char) => char === orderingWithDuplicatesRemoved[indexOfOrdering])
      .join("");
    finalStr += chars;
    indexOfOrdering++;
  }
  // add non-matching chars to the end of the new string
  if (string.length > finalStr.length) {
    const missingChars = strArr
      .filter((char) => finalStr.indexOf(char) < 0)
      .join("");
    finalStr += missingChars;
  }
  return finalStr;
}

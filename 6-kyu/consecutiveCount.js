/* 
6 kyu

I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

Notes:
- The items and the key will be either an integer or a string (consisting of letters only)
- If the key does not appear in the items, return 0

Examples
90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0
*/

function getConsectiveItems(items, key) {
  const consecutiveCountArr = [];
  const itemsStr = items.toString();
  let temp = "";
  for (let i = 0; i < itemsStr.length; i++) {
    let currentChar = itemsStr[i];
    if (currentChar === key.toString()) {
      temp += currentChar;
    } else if (temp) {
      consecutiveCountArr.push(temp.length);
      temp = "";
    }
  }
  if (temp.length > 0) consecutiveCountArr.push(temp.length);
  if (consecutiveCountArr.length === 0) return 0;
  return Math.max(...consecutiveCountArr);
}

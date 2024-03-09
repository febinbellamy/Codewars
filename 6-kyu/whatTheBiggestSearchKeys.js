/* 
6 kyu

You're a programmer in a SEO company. The SEO specialist of your company gets the list of all project keywords everyday, then he looks for the longest keys to analyze them.

You will get the list with keywords and must write a simple function that returns the biggest search keywords and sorts them in lexicographical order.

For instance you might get:
'key1', 'key2', 'key3', 'key n', 'bigkey2', 'bigkey1'

And your function should return:
"'bigkey1', 'bigkey2'"

Don't forget to rate this kata! Thanks :)
*/

function theBiggestSearchKeys(...args) {
  //your code here
  if (args.length === 0) return "''";
  let maxLength = -Infinity;

  for (let i = 0; i < args.length; i++) {
    let currentTextLength = args[i].length;
    if (currentTextLength > maxLength) {
      maxLength = currentTextLength;
    }
  }
  const biggestWordsSorted = args
    .filter((word) => word.length === maxLength)
    .sort();
  let finalStr = "";
  for (let i = 0; i < biggestWordsSorted.length; i++) {
    let currentWord = biggestWordsSorted[i];
    finalStr += `\'${currentWord}\'${
      i === biggestWordsSorted.length - 1 ? "" : ","
    } `;
  }
  return finalStr.trim();
}

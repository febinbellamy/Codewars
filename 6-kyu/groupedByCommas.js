/* 
6 kyu

Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

function groupByCommas(n) {
  const nStr = n.toString();
  const finalArr = [];
  let counter = 1;
  let index = nStr.length - 1;

  while (index >= 0) {
    let currentChar = nStr[index];
    finalArr.unshift(currentChar);
    if (counter % 3 === 0 && nStr[index - 1]) finalArr.unshift(",");
    index--;
    counter++;
  }
  return finalArr.join("");
}

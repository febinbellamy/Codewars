/* 
7 kyu

Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

Examples
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"
*/

function lottery(str) {
  //your code is here...
  const uniqueIntegersInOrder = [];
  const uniqueInts = {};
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (/[0-9]/.test(currentChar) && !(currentChar in uniqueInts)) {
      uniqueInts[currentChar] = 1;
      uniqueIntegersInOrder.push(currentChar);
    }
  }
  return uniqueIntegersInOrder.length === 0
    ? "One more run!"
    : uniqueIntegersInOrder.join("");
}

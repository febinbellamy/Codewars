/* 
6 kyu

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  // Your code here
  let strNum = String(num);

  let tempStr = "";
  let finalStr = "";

  for (let i = 0; i < strNum.length; i++) {
    let currentChar = strNum[i];
    if (currentChar === "0") continue;
    if (i !== 0) finalStr += " + ";
    tempStr += currentChar;
    let numberOfZeroes = strNum.length - 1 - i;
    if (numberOfZeroes > 0) {
      for (let j = 0; j < numberOfZeroes; j++) {
        tempStr += "0";
      }
    }
    finalStr += tempStr;
    tempStr = "";
  }
  return finalStr;
}

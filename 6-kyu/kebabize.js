/* 
6 kyu

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:
- the returned string should only contain lowercase letters
*/

function kebabize(str) {
  // return
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (!/[a-zA-Z]/.test(currentChar)) continue;
    if (currentChar.toUpperCase() === currentChar && newStr) newStr += "-";
    newStr += currentChar.toLowerCase();
  }
  return newStr;
}

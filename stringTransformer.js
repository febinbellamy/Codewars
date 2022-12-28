/* 
6 kyu

Given a string, return a new string that has transformed based on the input:

- Change case of every character, ie. lower case to upper case, upper case to lower case.
- Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:
"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.
*/

function stringTransformer(str) {
  // Your code here

  const strArr = str.split(" ");
  const finalArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let currentWord = strArr[i];
    let updatedCurrentWord = currentWord
      .split("")
      .map((char) =>
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
      );
    finalArr.push(updatedCurrentWord.join(""));
  }
  return finalArr.reverse().join(" ");
}

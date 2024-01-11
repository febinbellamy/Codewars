/* 
7 kyu

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:
"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"--> "invalid string"
*/

function evenChars(string) {
  //keep coding!
  if (string.length <= 1 || string.length > 100) {
    return "invalid string";
  }
  const splitStr = string.split("");
  const finalArr = [];
  for (let i = 0; i < splitStr.length; i++) {
    let currentChar = splitStr[i];
    if (i % 2 !== 0) {
      finalArr.push(currentChar);
    }
  }
  return finalArr;
}

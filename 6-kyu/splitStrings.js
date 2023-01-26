/* 
6 kyu

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
  const finalArr = [];
  let temp = "";
  let even = false;
  if (str.length % 2 !== 0) even = true;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (i === str.length - 1 && even) {
      temp += currentChar + "_";
      finalArr.push(temp);
      break;
    }
    temp += currentChar;
    if (i % 2 !== 0) {
      finalArr.push(temp);
      temp = "";
    }
  }
  return finalArr;
}

/* 
7 kyu

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

function sevenAte9(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "9" && str[i - 1] === "7" && str[i + 1] === "7") {
      continue;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

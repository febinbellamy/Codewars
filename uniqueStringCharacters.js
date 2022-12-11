/* 
7 kyu

In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases. Good luck!
*/

function solve(a, b) {
  const aCharsNotInB = a.split("").filter((char) => b.indexOf(char) === -1);
  const bCharsNotInA = b.split("").filter((char) => a.indexOf(char) === -1);

  if (aCharsNotInB.length === 0 && bCharsNotInA.length > 0)
    return bCharsNotInA.join("");
  if (bCharsNotInA.length === 0 && aCharsNotInB.length > 0)
    return aCharsNotInB.join("");

  return aCharsNotInB.join("") + bCharsNotInA.join("");
}

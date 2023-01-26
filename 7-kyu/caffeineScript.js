/* 
7 kyu

Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

Examples
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"
*/

function caffeineBuzz(n) {
  if (n % 3 === 0 && n % 4 === 0) {
    if (n % 2 === 0) return "CoffeeScript";
    return "Coffee";
  } else if (n % 3 === 0) {
    if (n % 2 === 0) return "JavaScript";
    return "Java";
  } else {
    return "mocha_missing!";
  }
}

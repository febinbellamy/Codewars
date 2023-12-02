/* 
8 kyu

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
*/

function uniTotal(string) {
  // total up dem unicodes!

  let total = 0;

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    total += currentChar.charCodeAt();
  }
  return total;
}

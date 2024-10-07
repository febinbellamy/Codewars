/* 
7 kyu

Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.
*/

//These are your super secret characters you will use to make the password super secure
var superSecretChars = [
  ["a", "@"],
  ["s", "$"],
  ["o", "0"],
  ["h", "5"],
  ["x", "*"],
];
function createSSP(password) {
  //TODO: Make that password super secret
  const charsObj = { a: "@", s: "$", o: "0", h: "5", x: "*" };

  let result = "";
  for (let i = 0; i < password.length; i++) {
    let currentChar = password[i];
    if (currentChar.toLowerCase() in charsObj) {
      result += charsObj[currentChar.toLowerCase()];
    } else {
      result += currentChar;
    }
  }
  return result;
}

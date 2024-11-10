/* 
8 kyu

Write a simple regex to validate a username. Allowed characters are:
- lowercase letters,
- numbers,
- underscore

Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
  if (username.length > 16 || username.length < 4) return false;
  const checkUserName = username
    .split("")
    .filter((char) => /[_0-9a-z]/.test(char));
  return username === checkUserName.join("");
}

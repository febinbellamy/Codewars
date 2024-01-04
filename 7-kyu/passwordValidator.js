/* 
7 kyu

Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:
- There needs to be at least 1 uppercase letter.
- There needs to be at least 1 lowercase letter.
- There needs to be at least 1 number.
- The password needs to be at least 8 characters long.

You are permitted to use any methods to validate the password.

Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;

Extra info
- You will only be passed strings.
- The string can contain any standard keyboard character.
- Accepted strings can be any length, as long as they are 8 characters or more.
*/

function password(str) {
  //validate password
  if (str.length < 8) return false;

  let upperCaseLetterCount = 0;
  let lowerCaseLetterCount = 0;
  let numCount = 0;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (/[A-Z]/.test(currentChar)) {
      upperCaseLetterCount++;
    } else if (/[a-z]/.test(currentChar)) {
      lowerCaseLetterCount++;
    } else if (/[0-9]/.test(currentChar)) {
      numCount++;
    }
  }

  if (upperCaseLetterCount > 0 && lowerCaseLetterCount > 0 && numCount > 0) {
    return true;
  } else {
    return false;
  }
}

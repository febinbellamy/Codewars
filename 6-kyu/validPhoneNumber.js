/* 
6 kyu

Write a function that accepts a string, and returns true if it is in the form of a phone number. Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:
"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/

function validPhoneNumber(phoneNumber) {
  //TODO: Return whether phoneNumber is in the proper form

  if (phoneNumber.length !== 14) return false;

  const pattern = "(111) 111-1111";

  for (let i = 0; i < pattern.length; i++) {
    let currentPatternChar = pattern[i];
    let currentInputChar = phoneNumber[i];
    if (currentPatternChar === "(" && currentInputChar !== "(") {
      return false;
    } else if (currentPatternChar === ")" && currentInputChar !== ")") {
      return false;
    } else if (currentPatternChar === " " && currentInputChar !== " ") {
      return false;
    } else if (currentPatternChar === "-" && currentInputChar !== "-") {
      return false;
    } else if (
      /^\d+$/.test(currentPatternChar) &&
      !/^\d+$/.test(currentInputChar)
    ) {
      return false;
    }
  }
  return true;
}

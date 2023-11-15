/* 
6 kyu

The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.

If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.

Examples:
reverseCase("puzzles")    Expected Result: "puZZles"
reverseCase("massive")    Expected Result: "maSSive"
reverseCase("LITTLE")     Expected Result: "LIttLE"
reverseCase("shhh")       Expected Result: "sHHH"
Arguments passed will include only alphabetical letters A–Z or a–z.
*/

function reverseCase(string) {
  //...

  let finalStr = "";

  let currentChar = string[0];
  let nextChar = string[1];

  if (currentChar === nextChar) {
    if (currentChar === currentChar.toLowerCase()) {
      finalStr += currentChar.toUpperCase();
    } else {
      finalStr += currentChar.toLowerCase();
    }
  } else {
    finalStr += currentChar;
  }

  for (let i = 1; i < string.length; i++) {
    currentChar = string[i];
    nextChar = string[i + 1];
    let prevChar = string[i - 1];

    if (currentChar === prevChar || currentChar === nextChar) {
      if (currentChar === currentChar.toLowerCase()) {
        finalStr += currentChar.toUpperCase();
      } else {
        finalStr += currentChar.toLowerCase();
      }
      continue;
    }
    finalStr += currentChar;
  }
  return finalStr;
}

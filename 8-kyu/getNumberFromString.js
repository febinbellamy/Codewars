/* 
8 kyu

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:
getNumberFromString(s)
*/

function getNumberFromString(s) {
  return Number(
    s
      .split("")
      .filter((char) => /[0-9]/.test(char))
      .join("")
  );
}

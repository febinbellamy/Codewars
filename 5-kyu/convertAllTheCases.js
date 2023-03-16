/* 
5 kyu

In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

You must write a function that changes to a given case. It must be able to handle all three case types:

js> changeCase("snakeCase", "snake")
"snake_case"
js> changeCase("some-lisp-name", "camel")
"someLispName"
js> changeCase("map_to_all", "kebab")
"map-to-all"
js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
js> changeCase("invalid-inPut_bad", "kebab")
undefined
js> changeCase("valid-input", "huh???")
undefined
js> changeCase("", "camel")
""

Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.
*/

function changeCase(identifier, targetCase) {
  // Your code here!

  if (identifier.length === 0) return "";
  let newStr = "";

  let filterForDash = identifier.split("").filter((char) => char === "-");
  let filterForUnderScore = identifier.split("").filter((char) => char === "_");
  let filterForUpperCase = identifier
    .split("")
    .filter((char) => /[A-Z]/.test(char));

  if (targetCase === "snake") {
    for (let i = 0; i < identifier.length; i++) {
      let currentChar = identifier[i];
      let prevChar = identifier[i - 1];

      if (/[A-Z]/.test(currentChar)) {
        newStr += "_";
        newStr += currentChar.toLowerCase();
      } else if (currentChar === "-") {
        newStr += "_";
      } else {
        newStr += currentChar.toLowerCase();
      }
    }
    if (newStr === identifier) return newStr;
    if (
      filterForUnderScore.length > 0 ||
      (filterForUpperCase.length > 0 && filterForDash.length > 0)
    )
      return undefined;
    return newStr;
  } else if (targetCase === "camel") {
    for (let i = 0; i < identifier.length; i++) {
      let currentChar = identifier[i];
      let prevChar = identifier[i - 1];

      if (prevChar && !/[a-zA-Z]/.test(prevChar)) {
        newStr += currentChar.toUpperCase();
      } else if (/[a-zA-Z]/.test(currentChar)) {
        newStr += currentChar;
      }
    }

    if (newStr === identifier) return newStr;
    if (
      filterForUpperCase.length > 0 ||
      (filterForUnderScore.length > 0 && filterForDash.length > 0)
    )
      return undefined;
    return newStr;
  } else if (targetCase === "kebab") {
    for (let i = 0; i < identifier.length; i++) {
      let currentChar = identifier[i];
      let prevChar = identifier[i - 1];

      if (/[A-Z]/.test(currentChar)) {
        newStr += "-";
        newStr += currentChar.toLowerCase();
      } else if (currentChar === "_") {
        newStr += "-";
      } else {
        newStr += currentChar.toLowerCase();
      }
    }

    if (newStr === identifier) return newStr;
    if (
      filterForDash.length > 0 ||
      (filterForUnderScore.length > 0 && filterForUpperCase.length > 0)
    )
      return undefined;
    return newStr;
  } else {
    return undefined;
  }
}

/* 
6 kyu

Give you a sentence s. It contains some words and separated by spaces. Another arguments is n, its a number(1,2 or 3). You should convert s to camelCase n.

There are three kinds of camelCase:

camelCase 1: The first letter of each word should be capitalized. 
              Except for the first word.

Example: "Hello world"  -->  "helloWorld"

camelCase 2: The last letter of each word should be capitalized. 
              Except for the last word. 

Example: "Hello world"  -->  "hellOworld"

camelCase 3: The first and last letters of each word should be capitalized. 
              Except for the first and lasts letter of sentence. 

Example: "Hello world"  -->  "hellOWorld" 

You can assume that all of the input data is valid. That is: s always be a string; It contains at least two words; Each word contains only letters(a-zA-Z); Each word contains ar least three letters; n always be 1,2 or 3.

Examples
toCamelCase("hello world",1) === "helloWorld"
toCamelCase("hello world",2) === "hellOworld"
toCamelCase("hello world",3) === "hellOWorld"

toCamelCase("Hello world",1) === "helloWorld"

toCamelCase("Each number plus one",1) === "eachNumberPlusOne"
toCamelCase("Each number plus one",2) === "eacHnumbeRpluSone"
toCamelCase("Each number plus one",3) === "eacHNumbeRPluSOne"

Random tests may contains bug(I'm not sure), please test and feedback, thanks ;-)
*/

function toCamelCase(s, n) {
  let finalStr = "";
  const arr = s.split(" ");

  if (n === 1) {
    for (let i = 0; i < arr.length; i++) {
      let currentWord = arr[i].toLowerCase();
      if (i === 0) {
        finalStr += currentWord;
      } else {
        finalStr += `${currentWord[0].toUpperCase()}${currentWord.slice(1)}`;
      }
    }
  } else if (n === 2) {
    for (let j = 0; j < arr.length; j++) {
      let currentWord = arr[j].toLowerCase();
      if (j === arr.length - 1) {
        finalStr += currentWord;
      } else {
        finalStr += `${currentWord.slice(
          0,
          currentWord.length - 1
        )}${currentWord[currentWord.length - 1].toUpperCase()}`;
      }
    }
  } else if (n === 3) {
    for (let k = 0; k < arr.length; k++) {
      let currentWord = arr[k].toLowerCase();
      if (k === 0) {
        finalStr += `${currentWord.slice(
          0,
          currentWord.length - 1
        )}${currentWord[currentWord.length - 1].toUpperCase()}`;
      } else if (k === arr.length - 1) {
        finalStr += `${currentWord[0].toUpperCase()}${currentWord.slice(1)}`;
      } else {
        finalStr += `${currentWord[0].toUpperCase()}${currentWord.slice(
          1,
          currentWord.length - 1
        )}${currentWord[currentWord.length - 1].toUpperCase()}`;
      }
    }
  }
  return finalStr;
}

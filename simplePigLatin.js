/* 
5 kyu

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str) {
  const splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    let currentWord = splitStr[i];
    let firstLetter = currentWord[0];
    if (currentWord === "!" || currentWord === "?") continue;
    splitStr[i] = `${currentWord.slice(1)}${currentWord[0]}ay`;
  }
  return splitStr.join(" ");
}

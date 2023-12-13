/* 
7 kyu

In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

A few examples should help clarify:
- esrever("hello world.") == "dlrow olleh."
- esrever("Much l33t?") == "t33l hcuM?"
- esrever("tacocat!") == "tacocat!"

Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.
*/

function esrever(str) {
  if (!str) return str;
  let newStrArr = str.split(" ").reverse();
  const arr = [];

  for (let i = 0; i < newStrArr.length; i++) {
    let currentWord = newStrArr[i];
    let newWord;
    if (i === 0) {
      newWord = currentWord
        .slice(0, currentWord.length - 1)
        .split("")
        .reverse()
        .join("");
    } else {
      newWord = currentWord.split("").reverse().join("");
    }
    arr.push(newWord);
  }
  return arr.join(" ").trimRight() + newStrArr[0][newStrArr[0].length - 1];
}

/* 
7 kyu

Task
Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/

function remove(string) {
  //coding and coding....
  const words = string.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let temp = "";
    let letterCount = 0;

    for (let j = 0; j < currentWord.length; j++) {
      let currentChar = currentWord[j];
      if (currentChar === "!" && letterCount === 0) {
        temp += currentChar;
      } else if (/[a-zA-Z]/.test(currentChar)) {
        temp += currentChar;
        letterCount++;
      }
    }
    result.push(temp);
  }

  return result.join(" ");
}

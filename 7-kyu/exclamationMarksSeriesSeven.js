/* 
7 kyu

Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/

function remove(string) {
  //coding and coding....
  const words = string.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let numOfExclamationsInWord = word
      .split("")
      .filter((char) => char === "!").length;
    if (numOfExclamationsInWord !== 1) {
      result.push(word);
    }
  }
  return result.join(" ");
}

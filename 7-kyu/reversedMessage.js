/* 
7 kyu

Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'
*/

function reverseMessage(str) {
  if (!str) return str;
  const message = [];
  const strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    let currentWord = strArr[i];
    if (!currentWord) {
      message.push(currentWord);
      continue;
    }

    let reversedWord = currentWord.toLowerCase().split("").reverse();
    if (/[a-zA-Z]/.test(reversedWord[0])) {
      reversedWord[0] = reversedWord[0].toUpperCase();
    }
    message.push(reversedWord.join(""));
  }

  return message.reverse().join(" ");
}

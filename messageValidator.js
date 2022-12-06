/* 
6 kyu

In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:
- Messages are composed of only letters and digits
- Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
- Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
- If the message is an empty string, you should return true
*/

function isAValidMessage(message) {
  if (message === "") return true;

  const messageArr = [];
  let temp = "";

  for (let i = 0; i < message.length; i++) {
    let currentChar = message[i];
    if (/^\d$/.test(+currentChar)) {
      if (typeof messageArr[messageArr.length - 1] === "number") {
        let concat = messageArr[messageArr.length - 1] + currentChar;
        messageArr[messageArr.length - 1] = +concat;
      } else {
        messageArr.push(+currentChar);
      }
    } else {
      temp += currentChar;
      if (/^\d$/.test(message[i + 1])) {
        messageArr.push(temp);
        temp = "";
      }
    }
    if (i === message.length - 1 && temp) messageArr.push(temp);
  }

  if (typeof messageArr[messageArr.length - 1] === "number") return false;

  for (let j = 0; j < messageArr.length; j++) {
    if (j % 2 === 0) {
      if (messageArr[j + 1].length !== messageArr[j]) return false;
    }
  }

  return true;
}

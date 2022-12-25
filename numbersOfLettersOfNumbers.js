/* 
6 kyu

If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

Examples
numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
numbersOfLetters(1) --> ["one", "three", "five", "four"]
*/

function numbersOfLetters(integer) {

  const words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  
  const finalArr = [];
  const strNum = integer.toString();
  let tempStr = "";

  for (let i = 0; i < strNum.length; i++) {
    let currentDigit = strNum[i];
    tempStr += words[currentDigit];
  }

  finalArr.push(tempStr);

  while (finalArr[finalArr.length - 1] !== "four") {
    let lengthOfLastElementStr =
      finalArr[finalArr.length - 1].length.toString();

    if (lengthOfLastElementStr.length > 1) {
      let index = 0;
      let temp = "";

      while (index < lengthOfLastElementStr.length) {
        let currentDigit = lengthOfLastElementStr[index];
        temp += words[currentDigit];
        index++;
      }

      finalArr.push(temp);
    } else {
      finalArr.push(words[finalArr[finalArr.length - 1].length]);
    }
  }
  return finalArr;
}

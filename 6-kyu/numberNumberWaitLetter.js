/* 
6 kyu

Your task is to write a function named do_math that receives a single argument. This argument is a string that contains multiple whitespace delimited numbers. Each number has a single alphabet letter somewhere within it.

Example : "24z6 1x23 y369 89a 900b"

As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.

Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)

Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

- The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
- This has to work for any size of numbers sent in (after division, go back to addition, etc).
- In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
- Remember to also round the final answer to the nearest integer.

Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

Good luck and may the CODE be with you!
*/

function doMath(s) {
  const arrOfObjs = [];
  const sArr = s.split(" ");
  for (let i = 0; i < sArr.length; i++) {
    let currentElement = sArr[i];
    let character = sArr[i]
      .split("")
      .filter((char) => /[a-zA-Z]/.test(char))[0];
    let num = +sArr[i]
      .split("")
      .filter((char) => /[0-9]/.test(char))
      .join("");
    arrOfObjs.push({ character: character, num: num, index: i });
  }
  arrOfObjs.sort((a, b) => {
    if (a.character < b.character) return -1;
    if (a.character > b.character) return 1;
    if (a.index < b.index) return -1;
    if (a.index > b.index) return 1;
  });

  let sum = arrOfObjs[0]["num"];
  let count = 0;

  for (let j = 1; j < arrOfObjs.length; j++) {
    let currentObj = arrOfObjs[j];
    if (count === 0) {
      sum += currentObj["num"];
    } else if (count === 1) {
      sum -= currentObj["num"];
    } else if (count === 2) {
      sum *= currentObj["num"];
    } else if (count === 3) {
      sum /= currentObj["num"];
    }
    count++;
    if (count === 4) count = 0;
  }

  return Math.round(sum);
}

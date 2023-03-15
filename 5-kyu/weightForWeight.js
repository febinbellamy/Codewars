/* 
5 kyu

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
- "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
- "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
- it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
- For C: The result is freed.
*/

function orderWeight(strng) {
  const arrOfObjs = [];
  let temp = "";

  for (let i = 0; i < strng.length; i++) {
    let currentChar = strng[i];
    if (/[0-9]/.test(currentChar)) {
      temp += currentChar;
      if (i !== strng.length - 1) continue;
    }
    if (temp.length > 0) {
      let weight = temp.split("").reduce((a, c) => Number(a) + Number(c), 0);
      let obj = { num: +temp, weight: weight };
      arrOfObjs.push(obj);
      temp = "";
    }
  }

  arrOfObjs.sort((a, b) => {
    if (a.weight < b.weight) return -1;
    if (a.weight > b.weight) return 1;
    if (a["num"].toString().localeCompare(b["num"].toString()) < 0) return -1;
    if (a["num"].toString().localeCompare(b["num"].toString()) > 0) return 1;
  });

  let finalStr = "";
  for (let j = 0; j < arrOfObjs.length; j++) {
    let currentObjNum = arrOfObjs[j]["num"];
    finalStr += `${currentObjNum}${j < arrOfObjs.length - 1 ? " " : ""}`;
  }
  return finalStr;
}

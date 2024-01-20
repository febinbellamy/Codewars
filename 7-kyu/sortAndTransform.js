/* 
7 kyu

Given an array of numbers, return a string made up of four parts:

a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

the same as above, post sorting the array into ascending order,

the same as above, post sorting the array into descending order,

the same as above, post converting the array into ASCII characters and sorting alphabetically.

The four parts should form a single string, each part separated by a hyphen (-).

Example format of solution: "asdf-tyui-ujng-wedg"

Examples
[111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
[66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
[99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"
*/

function sortTransform(a) {
  function transformArrToString(arr) {
    const tempArr = [arr[0], arr[1], arr[arr.length - 2], arr[arr.length - 1]];
    const arrOfChars = [];
    let count = 0;
    while (count < 4) {
      let currentNumber = tempArr[count];
      arrOfChars.push(String.fromCharCode(currentNumber));
      count++;
    }
    return arrOfChars;
  }

  // first part of String
  const firstPartOfStr = transformArrToString([...a]).join("") + "-";

  // second part of String
  const sortedSecond = [...a].sort((a, b) => a - b);
  const secondPartOfStr = transformArrToString(sortedSecond).join("") + "-";

  // third part of String
  const sortedThird = [...a].sort((a, b) => b - a);
  const thirdPartOfStr = transformArrToString(sortedThird);
  const finalThird = transformArrToString(sortedThird).join("") + "-";

  // fourth part of String
  const fourthPartOfStr = [...thirdPartOfStr].sort().join("");

  return firstPartOfStr + secondPartOfStr + finalThird + fourthPartOfStr;
}

/* 
7 kyu

Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with at least one dash in between!

This means that both O--O and O------------O are valid glasses, but not O----#--O for example!

Search thoroughly, you might find my glasses in places such as 'dustO-Odust'

Examples
["phone", "O-O", "coins", "keys"] ➞ 1
["OO", "wallet", "O##O", "O----O"] ➞ 3
["O--#--O", "dustO---Odust", "more dust"] ➞ 1

Notes
- All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
- All elements in the list are strings.
*/

function findGlasses(arr) {
  // Good luck!
  for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i];
    let tempStr = "";
    for (let j = 0; j < currentElem.length; j++) {
      let currentChar = currentElem[j];
      if (currentChar === "O") {
        // only add currentChar to tempStr if tempStr is empty or if the last char of tempStr is a -
        // if the last char of tempStr is a - , return i.
        if (tempStr === "") {
          tempStr += currentChar;
        } else if (tempStr[tempStr.length - 1] === "-") {
          return i;
        }
      } else if (currentChar === "-") {
        // only add currentChar to tempStr if the last char of tempStr is a "O" or "-"
        if (
          tempStr[tempStr.length - 1] === "O" ||
          tempStr[tempStr.length - 1] === "-"
        ) {
          tempStr += currentChar;
        }
      } else if (currentChar !== "-" && currentChar !== "O") {
        // if currentChar is not a i or O and tempStr has atleast 1 char, break out of loop and check next element in arr
        if (tempStr.length > 0) {
          break;
        }
      }
    }
    tempStr = "";
  }
}

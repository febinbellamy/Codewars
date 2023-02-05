/* 
7 kyu

Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
*/

function replaceAll(seq, find, replace) {
  if (Array.isArray(seq)) {
    for (let i = 0; i < seq.length; i++) if (seq[i] === find) seq[i] = replace;
    return seq;
  } else if (typeof seq === "string") {
    let newStr = "";
    for (let j = 0; j < seq.length; j++) {
      if (seq[j] === find) {
        newStr += replace;
      } else {
        newStr += seq[j];
      }
    }
    return newStr;
  }
}

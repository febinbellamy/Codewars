/* 
6 kyu

In this task, you need to restore a string from a list of its copies.

You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

If the array is empty, then return an empty string.

Examples:
input = [
  "a*cde",
  "*bcde",
  "abc*e"
]
result = "abcde"


input = [
  "a*c**",
  "**cd*",
  "a*cd*"
]
result = "a#cd#"
*/

function assembleString(array) {
  if (array.length === 0) return "";
  let length = array[0].length;
  let i = 0;
  let checkCharArr;
  let finalStr = "";

  while (i < length) {
    checkCharArr = array.map((word) => word[i]).sort();
    let lengthOfArr = checkCharArr.length;
    let filterArr = checkCharArr.filter((char) => char !== "*");

    if (filterArr.length === 0) {
      finalStr += "#";
    } else {
      finalStr += filterArr[0];
    }
    i++;
  }
  return finalStr;
}

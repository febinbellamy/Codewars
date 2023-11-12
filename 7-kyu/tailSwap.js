/* 
7 kyu

You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

function tailSwap(arr) {
  // your code here

  const indexOfFirstColon = arr[0].indexOf(":");
  const indexOfSecondColon = arr[1].indexOf(":");
  const newFirstString =
    arr[0].slice(0, indexOfFirstColon) + arr[1].slice(indexOfSecondColon);
  const newSecondString =
    arr[1].slice(0, indexOfSecondColon) + arr[0].slice(indexOfFirstColon);
  return [newFirstString, newSecondString];
}

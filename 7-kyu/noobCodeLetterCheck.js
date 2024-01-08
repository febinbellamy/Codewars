/* 
7 kyu

Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false

Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array
*/

function letterCheck(arr) {
  //write your code here!!
  const uniqueSet = new Set(arr[1]);
  const lowerCasedStr = arr[0].toLowerCase();
  for (let char of uniqueSet) {
    if (lowerCasedStr.indexOf(char.toLowerCase()) === -1) return false;
  }
  return true;
}

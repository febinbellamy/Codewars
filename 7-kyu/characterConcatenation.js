/* 
7 kyu

Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:
charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

function charConcat(string) {
  //your code here
  let pointer1 = 0;
  let pointer2 = string.length - 1;
  let finalStr = "";
  while (pointer1 < pointer2) {
    finalStr += `${string[pointer1]}${string[pointer2]}${pointer1 + 1}`;
    pointer1++;
    pointer2--;
  }
  return finalStr;
}

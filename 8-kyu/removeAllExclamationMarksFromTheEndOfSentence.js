/* 
8 kyu

Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

function remove(string) {
  let reversedStringArr = string.split("").reverse("");
  let indexOfFirstLetter;
  let indexCount = 0;

  while (indexCount < reversedStringArr.length) {
    let currentElement = reversedStringArr[indexCount];
    if (/[a-zA-Z]/.test(currentElement)) {
      indexOfFirstLetter = indexCount;
      break;
    }
    indexCount++;
  }
  return reversedStringArr.slice(indexOfFirstLetter).reverse().join("");
}

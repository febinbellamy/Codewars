/* 
6 kyu

For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :
    a tuple (t, k) (in Python)
    an array [t, k] (in Ruby and JavaScript)
    in C, return k and write to the string t passed in parameter

Example #1: for string s = "ababab"; the answer is ["ab", 3]
Example #2: for string s = "abcde" the answer is ["abcde", 1] because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.
*/

function f(s) {
  // your code here

  const strArr = s.split("");
  const substrings = [];
  const k = [];
  let tempSubStringArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let currentChar = strArr[i];
    tempSubStringArr.push(currentChar);

    let sliceRemainingStr = strArr.slice(i + 1);

    if (tempSubStringArr.length > sliceRemainingStr.length) {
      substrings.push(s);
      k.push(1);
      break;
    }

    let index = -1;
    let newArr = sliceRemainingStr.map((num) => {
      index++;
      if (index === tempSubStringArr.length) {
        index = 0;
      }
      return (num = tempSubStringArr[index]);
    });

    let finalArr = [...tempSubStringArr, ...newArr];

    if (finalArr.join("") === s) {
      let tempSubString = tempSubStringArr.join("");
      k.push(finalArr.join("").split(`${tempSubString}`).length - 1);
      substrings.push(tempSubStringArr.join(""));
    }
  }

  let maxK = Math.max(...k);
  let indexOfMaxK = k.indexOf(maxK);
  return [substrings[indexOfMaxK], maxK];
}

/* 
8 kyu

Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes
- "flick" will always be given in lowercase.
- A list may contain multiple flicks.
- Switch the boolean value on the same element as the flick itself.
*/

function flickSwitch(arr) {
  const finalArr = [];
  let currentBoolean = true;

  for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i];

    if (currentElem === "flick") {
      currentBoolean = !currentBoolean;
    }

    finalArr.push(currentBoolean);
  }
  return finalArr;
}

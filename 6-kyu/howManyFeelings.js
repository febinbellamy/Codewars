/* 
6 kyu

You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

For example:
string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'

string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'

string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'

If the feeling can be formed once - plus one to the answer.

If the feeling can be formed several times from different letters - plus one to the answer.

Each letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.
*/

function countFeelings(string, array) {
  const stringFreqObj = {};
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (stringFreqObj[currentChar]) stringFreqObj[currentChar]++;
    else stringFreqObj[currentChar] = 1;
  }

  let index = 0;
  const arrOfFreqObjs = [];
  while (index < array.length) {
    let currentWord = array[index];
    let j = 0;
    let tempObj = {};
    while (j < currentWord.length) {
      let currentLetter = currentWord[j];
      if (tempObj[currentLetter]) tempObj[currentLetter]++;
      else tempObj[currentLetter] = 1;
      j++;
    }
    arrOfFreqObjs.push(tempObj);
    index++;
  }

  let feelingsCounter = 0;
  for (let j = 0; j < arrOfFreqObjs.length; j++) {
    let currentObj = arrOfFreqObjs[j];
    let count = 0;
    for (let key in currentObj) {
      if (!stringFreqObj[key] || currentObj[key] > stringFreqObj[key]) break;
      count++;
    }
    if (count === Object.keys(currentObj).length) feelingsCounter++;
  }
  return `${feelingsCounter} feeling${feelingsCounter === 1 ? "" : "s"}.`;
}

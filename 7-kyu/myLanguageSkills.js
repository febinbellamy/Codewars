/* 
7 kyu

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

function myLanguages(results) {
  const arrayOfObjects = [];

  for (let key in results) {
    if (results[key] >= 60) {
      arrayOfObjects.push({ language: key, score: results[key] });
    }
  }
  arrayOfObjects
    .sort((a, b) => b.score - a.score)
    .forEach((obj, index) => (arrayOfObjects[index] = obj.language));
  return arrayOfObjects;
}

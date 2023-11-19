/* 
7 kyu

Input:
- a string strng
- an array of strings arr

Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
- a boolean true if all rotations of strng are included in arr
- false otherwise

Examples:
contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

Note:
Though not correct in a mathematical sense
- we will consider that there are no rotations of strng == ""
- and for any array arr: contain_all_rots("", arr) --> true

Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
*/

function containAllRots(strng, arr) {
  // your code

  const allRotations = {};
  let counter = 0;
  let currentWord = strng;

  while (counter < strng.length) {
    let newStrArr = currentWord.split("");

    let poppedChar = newStrArr.pop();
    newStrArr.unshift(poppedChar);
    currentWord = newStrArr.join("");
    allRotations[currentWord] = 0;
    counter++;
  }

  for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i];
    if (currentElem in allRotations) {
      allRotations[currentElem]++;
    }
  }

  const zeroValues = Object.values(allRotations).filter((value) => value === 0);
  return zeroValues.length === 0;
}

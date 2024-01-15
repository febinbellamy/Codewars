/* 
6 kyu

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:
alphabetized("The Holy Bible") // "BbeehHilloTy"
*/

function alphabetized(s) {
  const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  const arrOfChars = s.split("").filter((char) => /[a-zA-Z]/.test(char));
  if (arrOfChars.length === 0) return "";

  const arrOfCharObjs = [];
  for (let i = 0; i < arrOfChars.length; i++) {
    arrOfCharObjs.push({ char: arrOfChars[i], index: i });
  }

  // first sort them alphabetically
  arrOfCharObjs.sort((a, b) => {
    if (alphabet.indexOf(a["char"]) < alphabet.indexOf(b["char"])) return -1;
    if (alphabet.indexOf(a["char"]) > alphabet.indexOf(b["char"])) return 1;
  });

  // then sort them in order of appearence
  let finalStr = "";
  let index = 0;
  let secondIndex = 1;

  while (secondIndex < arrOfCharObjs.length) {
    let currentChar = arrOfCharObjs[index]["char"];
    let nextChar = arrOfCharObjs[secondIndex]["char"];

    if (
      currentChar === nextChar.toUpperCase() ||
      currentChar.toUpperCase() === nextChar
    ) {
      // if aA or Aa

      // check if they are in the right order.
      let currentCharIdx = arrOfCharObjs[index]["index"];
      let nextCharIdx = arrOfCharObjs[secondIndex]["index"];
      // if not, SWAP!
      if (nextCharIdx < currentCharIdx) {
        let tempCurrChar = arrOfCharObjs[index]["char"];
        let tempCurrIdx = arrOfCharObjs[index]["index"];
        let tempNextChar = arrOfCharObjs[secondIndex]["char"];
        let tempNextIdx = arrOfCharObjs[secondIndex]["index"];
        arrOfCharObjs[index]["char"] = tempNextChar;
        arrOfCharObjs[index]["index"] = tempNextIdx;
        arrOfCharObjs[secondIndex]["char"] = tempCurrChar;
        arrOfCharObjs[secondIndex]["index"] = tempCurrIdx;
      }
    }
    finalStr += arrOfCharObjs[index]["char"];
    index++;
    secondIndex++;
  }
  finalStr += arrOfCharObjs[index]["char"];
  return finalStr;
}

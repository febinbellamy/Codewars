/* 
6 kyu

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

- The second and the last letter is switched (e.g. Hello becomes Holle)
- The first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

Examples
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  const finalArr = [];
  const splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    let currentWord = splitStr[i];
    let charsInCurrentWord = currentWord.split("");
    let letters = charsInCurrentWord.filter((char) => /^[a-zA-Z]+$/.test(char));

    if (letters.length < 2) {
      let numbers = charsInCurrentWord
        .filter((char) => /^\d$/.test(char))
        .join("");
      let ASCIIToLetter = String.fromCharCode(+numbers);
      let finalWord = charsInCurrentWord
        .join("")
        .replace(numbers, ASCIIToLetter);
      splitStr[i] = finalWord;
      finalArr.push(splitStr[i]);
      continue;
    }

    let secondLetter = letters[0];
    let lastLetter = letters[letters.length - 1];
    let indexOfSecondLetter = charsInCurrentWord.indexOf(secondLetter);
    let indexOfLastLetter = charsInCurrentWord.lastIndexOf(lastLetter);
    charsInCurrentWord[indexOfLastLetter] = secondLetter;
    charsInCurrentWord[indexOfSecondLetter] = lastLetter;
    let numbers = charsInCurrentWord
      .filter((char) => /^\d$/.test(char))
      .join("");
    let ASCIIToLetter = String.fromCharCode(+numbers);
    let finalWord = charsInCurrentWord.join("").replace(numbers, ASCIIToLetter);
    splitStr[i] = finalWord;
    finalArr.push(splitStr[i]);
  }

  return finalArr.join(" ");
}

/* 
6 kyu

One of the first chain emails I ever received was about a supposed Cambridge University study that suggests your brain can read words no matter what order the letters are in, as long as the first and last letters of each word are correct.

Your task is to create a function that can take any string and randomly jumble the letters within each word while leaving the first and last letters of the word in place.

For example,
mixwords('Winter is coming') // returns 'Wntier is cminog' or 'Wtiner is conimg'
mixwords('Hey, friends!') // returns 'Hey, fierdns!' or 'Hey, fernids!'

- All punctuation should remain in place
- Words smaller than 3 letters should not change
- Letters must be randomly moved (and so calling the function multiple times with the same string should return different values
- Parameters that are not strings should return undefined

The tests do the following things to ensure a valid string is returned:

- Check that the string returned is not equal to the string passed (you may have to revalidate the solution if your function randomly returns the same string)
- Check that first and last letters of words remain in place
- Check that punctuation remains in place
- Checks string length remains the same
- Checks the function returns undefined for non-strings
- Checks that word interiors (the letters between the first and last) maintain the same letters, albeit in a different order
- Checks that letters are randomly assigned.
*/

function mixwords(str) {
  // your code here!

  if (typeof str !== "string") return undefined;
  const splitArr = str.split(" ");

  function scrambleInnerWord(arrOfChars) {
    let length = arrOfChars.length;
    let newStr = "";
    let counter = 0;
    while (counter < length) {
      let randomIndex = Math.floor(Math.random() * arrOfChars.length);
      newStr += arrOfChars[randomIndex];
      arrOfChars.splice(randomIndex, 1);
      counter++;
    }
    return newStr;
  }

  for (let i = 0; i < splitArr.length; i++) {
    let currentWord = splitArr[i];
    let lettersInWord = currentWord
      .split("")
      .filter((char) => /[a-zA-Z]/.test(char));
    if (lettersInWord.length < 3) continue;

    let indicesOfLetters = lettersInWord.map((char) =>
      currentWord.indexOf(char)
    );
    let indexOfLastLetter = indicesOfLetters[indicesOfLetters.length - 1];

    let restOfStr = currentWord.slice(1, indexOfLastLetter).split("");
    let newStr = scrambleInnerWord(restOfStr);

    if (
      newStr === currentWord.slice(1, indexOfLastLetter) &&
      newStr.length > 1
    ) {
      if (newStr.split("").reverse().join("") === newStr) continue;
      newStr = scrambleInnerWord(restOfStr);
    }
    splitArr[i] = `${currentWord[0]}${newStr}${currentWord[indexOfLastLetter]}${
      lettersInWord.length !== currentWord.length
        ? currentWord.slice(indexOfLastLetter + 1)
        : ""
    }`;
  }
  return splitArr.join(" ");
}

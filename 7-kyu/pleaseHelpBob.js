/* 
7 kyu

In English we often use "neutral vowel sounds" such as "umm", "err", "ahh" as fillers in conversations to help them run smoothly. Bob always finds himself saying "err". Infact he adds an "err" to every single word he says that ends in a consonant! Because Bob is odd, he likes to stick to this habit even when emailing.

Task
Bob is begging you to write a function that adds "err" to the end of every word whose last letter is a consonant (not a vowel, y counts as a consonant).
The input is a string that can contain upper and lowercase characters, some punctuation but no numbers. The solution should be returned as a string.

NOTE: If the word ends with an uppercase consonant, the following "err" will be uppercase --> "ERR".

eg:
"Hello, I am Mr Bob" --> "Hello, I amerr Mrerr Boberr"
"THIS IS CRAZY!"  --> "THISERR ISERR CRAZYERR!"

Good luck!
*/

function errBob(string) {
  if (string.length === 0) return string;

  const consonants = "bcdfghjklmnpqrstvwxyz";
  const strArr = string.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    let currentWord = strArr[i];
    let checkWord = currentWord
      .split("")
      .filter((char) => /^[a-z0-9]+$/i.test(char));
    if (checkWord.length === 0) continue;

    let lettersOfCurrentWord = strArr[i]
      .split("")
      .filter((char) => /[a-zA-Z]/.test(char));
    let lastLetter = lettersOfCurrentWord[lettersOfCurrentWord.length - 1];
    let indexOfLastLetter = currentWord.lastIndexOf(lastLetter);
    let wordIncludingLastLetter = currentWord.slice(0, indexOfLastLetter + 1);
    let remainerOfWord = currentWord.slice(indexOfLastLetter + 1);

    if (consonants.includes(lastLetter.toLowerCase())) {
      strArr[i] = `${wordIncludingLastLetter}${
        lastLetter.toLowerCase() === lastLetter ? "err" : "ERR"
      }${remainerOfWord}`;
    }
  }
  return strArr.join(" ");
}

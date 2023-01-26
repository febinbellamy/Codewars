/* 
5 kyu

Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in. Recently, due to programming work by a hacker known only by the code name ROT13, it has been discovered that Gandalf used nothing but a simple letter substitution scheme, and further, that it is its own inverse|the same operation scrambles the message as unscrambles it.

This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).

Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.

So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'

The fascinating thing about this transformation is that the resulting language yields pronounceable words. For this problem, you will write code to translate Gandalf's manuscripts into plain text.

Your job is to write a function that decodes Gandalf's writings.

Input
The function will be passed a string for the function to decode. Each string will contain up to 100 characters, representing some text written by Gandalf. All characters will be plain ASCII, in the range space (32) to tilde (126).

Output
For each string passed to the decode function return its translation.
*/

function tongues(code) {
  const filteredArr = code.split("").filter((char) => /[A-Za-z]/.test(char));
  if (filteredArr.length === 0) return code;

  const consonants = "bkxznhdcwgpvjqtsrlmf";
  const vowels = "aiyeou";
  let newStr = "";
  let index = 0;

  while (index < code.length) {
    let currentChar = code[index];
    let tempIndex = 0;
    let counter = 0;

    if (consonants.includes(currentChar.toLowerCase())) {
      tempIndex = consonants.indexOf(currentChar.toLowerCase());
      while (counter < 10) {
        tempIndex++;
        if (tempIndex === consonants.length) {
          tempIndex = 0;
        }
        counter++;
      }

      let newChar = consonants[tempIndex];
      if (currentChar.toUpperCase() === currentChar) {
        newStr += newChar.toUpperCase();
      } else {
        newStr += newChar;
      }
    } else if (vowels.includes(currentChar.toLowerCase())) {
      tempIndex = vowels.indexOf(currentChar.toLowerCase());

      while (counter < 3) {
        tempIndex++;
        if (tempIndex === vowels.length) {
          tempIndex = 0;
        }
        counter++;
      }

      let newChar = vowels[tempIndex];
      if (currentChar.toUpperCase() === currentChar) {
        newStr += newChar.toUpperCase();
      } else {
        newStr += newChar;
      }
    } else {
      newStr += currentChar;
    }
    index++;
  }
  return newStr;
}

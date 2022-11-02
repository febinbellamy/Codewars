/* 
6 kyu

You get a "text" and have to shift the vowels by "n" positions to the right.
(Negative value for n should shift to the left.) 

"Position" means the vowel's position if taken as one item in a list of all vowels within the string.
A shift by 1 would mean that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Example:
text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"

If text is null or empty return exactly this value.
Vowels are "a,e,i,o,u".

*/

function vowelShift(text, n) {
  if (!text) return text;
  const vowels = "aeiouAEIOU";
  let vowelsInText = [];

  const textWithoutVowels = text.split("").map((char) => {
    if (vowels.includes(char)) {
      vowelsInText.push(char);
      return "-";
    } else {
      return char;
    }
  });

  let counter = 0;
  if (n > 0) {
    while (counter < n) {
      let arrMinusLastVal = vowelsInText.slice(0, vowelsInText.length - 1);
      let lastVal = vowelsInText[vowelsInText.length - 1];
      vowelsInText = [lastVal, ...arrMinusLastVal];
      counter++;
    }
  } else {
    while (counter > n) {
      let arrMinusLastVal = vowelsInText.slice(1);
      let firstVal = vowelsInText[0];
      vowelsInText = [...arrMinusLastVal, firstVal];
      counter--;
    }
  }

  let index = 0;
  for (let i = 0; i <= textWithoutVowels.length; i++) {
    let currentChar = textWithoutVowels[i];
    if (currentChar === "-") {
      textWithoutVowels[i] = vowelsInText[index];
      index++;
    }
  }
  return textWithoutVowels.join("");
}

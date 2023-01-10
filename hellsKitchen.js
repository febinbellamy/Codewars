/* 
7 kyu

Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:
Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

function gordon(a) {
  const aArr = a.split(" ");

  for (let i = 0; i < aArr.length; i++) {
    let currentWord = aArr[i];
    let newWord = (currentWord.toUpperCase() + "!!!!").split("");
    let vowels = "EIOU";
    for (let j = 0; j < newWord.length; j++) {
      if (vowels.includes(newWord[j])) {
        newWord[j] = "*";
      } else if (newWord[j] === "A") {
        newWord[j] = "@";
      }
    }
    aArr[i] = newWord.join("");
  }
  return aArr.join(" ");
}

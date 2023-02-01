/* 
7 kyu

Egg Talk.

Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

eg:
hello => heggeleggleggo
eggs => egegggeggsegg
FUN KATA => FeggUNegg KeggATeggA
////

This Kata is designed for beginners to practice the basics of regular expressions. With this in mind a little bit of commenting in your solution could be very useful.

Check Eloquent Javascript p176
*/

function heggeleggleggo(word) {
  //ceggodegge heggeregge
  let newStr = "";
  for (let i = 0; i < word.length; i++) {
    let currentChar = word[i];
    if (currentChar === " ") {
      newStr += currentChar;
    } else if (!/[aeiouAEIOU]/.test(currentChar)) {
      newStr += currentChar + "egg";
    } else {
      newStr += currentChar;
    }
  }
  return newStr;
}

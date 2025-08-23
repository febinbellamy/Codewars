decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
  let result = "";
  const morseCodeArr = morseCode.split(" ");
  for(let elem of morseCodeArr) {
    if (elem in MORSE_CODE) {
      result += MORSE_CODE[elem];
    } else if (elem.length === 0 && result[result.length - 1] !== " ") {
      result += " ";
    }
  }
  return result.trim();
}
function decipher(codedMessage){
  //your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for(let char of codedMessage) {
    if (/[^a-zA-Z]/.test(char)) {
      result += char;
      continue;
    } 
    let indexOfChar = alphabet.indexOf(char.toLowerCase());
    let newIndex = indexOfChar + 7;
    if (newIndex > 25) {
      newIndex = newIndex % 26;
    }
    result += /[a-z]/.test(char) ? alphabet[newIndex] : alphabet[newIndex].toUpperCase()
  }
  return result; 
}
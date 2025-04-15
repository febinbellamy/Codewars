function encrypter(string){
  //your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // part 1
  const resultOfPart1 = [];
  for(let char of string) {
    if (/[^a-z]/.test(char)) {
      resultOfPart1.push({"char": char});
      continue;
    }
    let indexOfChar = alphabet.indexOf(char);
    let newIndex = (indexOfChar + 13) % 26;
    resultOfPart1.push({"char": alphabet[newIndex], "index": newIndex});
  }  
  // part 2
  let final = "";
  for(let obj of resultOfPart1) {
    if (!obj.hasOwnProperty("index")) {
      final += obj["char"];
      continue;
    }
    let newChar = alphabet[alphabet.length - obj["index"] - 1];
    final += newChar;
  }
  return final;
}
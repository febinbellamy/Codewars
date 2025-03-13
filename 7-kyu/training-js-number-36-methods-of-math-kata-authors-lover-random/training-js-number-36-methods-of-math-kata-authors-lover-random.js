function rndCode(){
  //coding here...
  let letters = "ABCDEFGHIJKLM";
  let symbols = "~!@#$%^&*"
  let randomLetter1 = letters[Math.floor(Math.random() * letters.length)]
  let randomLetter2 = letters[Math.floor(Math.random() * letters.length)]
  let result = randomLetter1 + randomLetter2;
  for(let i = 0; i < 4; i++) {
    let randomInt = Math.floor(Math.random() * 10);
    result += randomInt;
  }
  let randomSymbol1 = symbols[Math.floor(Math.random() * symbols.length)]
  let randomSymbol2 = symbols[Math.floor(Math.random() * symbols.length)]
  return result += randomSymbol1 + randomSymbol2
}
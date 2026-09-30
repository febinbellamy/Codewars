function translateDate(dateStr){
  //Have Fun!
  let result = "";
  for(let i = 0; i < dateStr.length - 1; i+=2) {
    let currChar = dateStr[i];
    let nextChar = dateStr[i + 1];
    if (currChar === "-") {
      result += currChar;
      i--;
      continue;
    } 
    let newValue = 50 + +(currChar + nextChar);
    let translatedChar = String.fromCharCode(newValue);
    result += translatedChar;
  }
  return result;
}
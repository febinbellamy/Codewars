function nerdify(txt){
  let result = "";
  for(let i = 0; i < txt.length; i++) {
    let currentChar = txt[i];
    if (currentChar === "a" || currentChar === "A") {
      result += "4";
    } else if (currentChar === "e" || currentChar === "E") {
      result += "3"
    } else if (currentChar === "l") {
      result += "1";
    } else {
      result += currentChar;
    }
  }
  return result;
}
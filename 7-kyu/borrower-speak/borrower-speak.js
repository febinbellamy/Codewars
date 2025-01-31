function borrow(s){
  let result = "";
  for(let i = 0; i < s.length; i++) {
    let currentChar = s[i].toLowerCase();
    if (/[a-z0-9]/.test(currentChar)) {
      result += currentChar;
    }
  }
  return result;
}
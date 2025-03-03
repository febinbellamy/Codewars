function valAndUnits(s) {
  let units = "";
  let value = "";
  for(let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (/[0-9.-]/.test(currentChar)) {
      value += currentChar;
    } else if (/[a-zA-Z%]/.test(currentChar)) {
      units += currentChar;
    }
  }
  return {val: +value, units: units}
}
function comes_after(str, l) {
  let result = "";
  for (let i = 0; i < str.length - 1; i++) {
    let currentChar = str[i].toLowerCase();
    let nextChar = str[i + 1];
    if (currentChar === l && /[a-zA-Z]/.test(nextChar)) {
      result += nextChar;
    }
  }
  return result;
}
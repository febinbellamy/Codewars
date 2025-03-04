function evenator(str) {
  const wordsArr = str.split(' ');
  for(let i = 0; i < wordsArr.length; i++) {
    let noPunctuation = wordsArr[i].split('').filter((char) => /[a-zA-Z0-9]/.test(char))
    if (noPunctuation.length % 2 !== 0) {
      let lastChar = noPunctuation[noPunctuation.length - 1];
      noPunctuation.push(lastChar)
    }
    wordsArr[i] = noPunctuation.join('');
  }
  return wordsArr.join(" ");
}
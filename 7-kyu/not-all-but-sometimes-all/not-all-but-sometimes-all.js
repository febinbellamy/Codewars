function remove(str, what) {
  let result = "";
  for(let char of str) {
    if (char in what && what[char] > 0) {
      what[char]--;
    } else {
      result += char;
    }
  }
  return result;
}
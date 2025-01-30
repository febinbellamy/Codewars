function modifyMultiply (str,loc,num) {
//Code here
  let word = str.split(" ")[loc];
  let result = word;
  for(let i = 1; i < num; i++) {
    result += `-${word}`;
  }
  return result;
} 
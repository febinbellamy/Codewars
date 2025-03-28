function uniDecoder(...args){
  // Code here
  let result = "";
  for (let elem of args) {
    if (/[0-9]/.test(elem.toString())) {
      result += String.fromCharCode(elem);
    }
  }
  return result ? result : "not a valid character code";
}
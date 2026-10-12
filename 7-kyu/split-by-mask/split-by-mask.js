function split(string,mask) {
  if (mask.reduce((a, c) => a+c,0) !== string.length) return null;
  let currIndexOfString = 0;
  let currIndexOfMask = 0;
  const result = [];
  while (currIndexOfString < string.length) {
    let currMask = mask[currIndexOfMask];
    let splitStr = string.slice(currIndexOfString, currIndexOfString + currMask)
    result.push(splitStr);
    currIndexOfMask++;
    currIndexOfString += currMask;
  }
  return result;
}
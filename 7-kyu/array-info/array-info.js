function arrayInfo(arr){
  const length = arr.length;
  if (length === 0) return "Nothing in the array!";
  let intCount = 0;
  let floatCount = 0;
  let strCount = 0;
  let whiteSpaceCount = 0;
  for(let elem of arr) {
    if (elem === " ") {
      whiteSpaceCount++;
    } else if (parseInt(elem) === elem) {
      intCount++;
    } else if (parseFloat(elem) === elem) {
      floatCount++;
    } else if (typeof elem === "string") {
      strCount++;
    }
  }
  return [[length], [intCount ? intCount : null], [floatCount ? floatCount : null], [strCount ? strCount : null], [whiteSpaceCount ? whiteSpaceCount : null]];
}
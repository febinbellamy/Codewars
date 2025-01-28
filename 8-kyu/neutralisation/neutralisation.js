function neutralise(s1, s2) {
  // Here be dragons!
  let result = "";
  let index = 0;
  while(index < s1.length) {
    let currentCharS1 = s1[index];
    let currentCharS2 = s2[index];
    if ((currentCharS1 === "+" && currentCharS2 === "-") || (currentCharS1 === "-" && currentCharS2 === "+")) {
      result += "0";
    } else {
      result += currentCharS1;
    }
    index++;
  }
  
  return result;
}
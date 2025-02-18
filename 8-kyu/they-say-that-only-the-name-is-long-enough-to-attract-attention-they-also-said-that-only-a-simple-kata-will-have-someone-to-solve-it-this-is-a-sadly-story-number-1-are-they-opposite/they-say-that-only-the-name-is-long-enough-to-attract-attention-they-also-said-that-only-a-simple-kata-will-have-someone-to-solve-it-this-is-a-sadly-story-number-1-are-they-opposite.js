function isOpposite(s1,s2){
  //coding here...
  if ((!s1 && !s1) || s1.length !== s2.length) {
    return false;
  }
  for(let i = 0; i < s1.length; i++) {
    let currentCharS1 = s1[i];
    let currentCharS2 = s2[i];
    if (/[A-Z]/.test(currentCharS1) && currentCharS1.toLowerCase() !== currentCharS2) {
      return false;
    }
    if (/[a-z]/.test(currentCharS1) && currentCharS1.toUpperCase() !== currentCharS2) {
      return false;
    } 
  }
  return true;
}
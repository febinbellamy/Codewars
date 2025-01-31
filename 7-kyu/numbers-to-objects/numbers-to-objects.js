function numObj(s){
  const result = [];
  for(let i = 0; i < s.length; i++) {
    let currentNum = s[i];
    let letter = String.fromCharCode(currentNum);
    result.push({[currentNum]: letter});
  }
  return result;
}
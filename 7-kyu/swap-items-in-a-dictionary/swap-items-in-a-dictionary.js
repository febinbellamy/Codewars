function switchDict(dic) {
  const result = {};
  for(let key in dic) {
    let value = dic[key];
    if (value in result) {
      result[value].push(key)
    } else {
      result[value] = [key]
    }
  }
  return result;
}
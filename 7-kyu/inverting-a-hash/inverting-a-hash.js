function invertHash(hash) {
  const result = {};
  for(let key in hash) {
    let value = hash[key];
    result[value] = key;
  }
  return result;
}
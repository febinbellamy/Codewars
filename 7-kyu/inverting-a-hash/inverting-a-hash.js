function invertHash(hash) {
  const output = {};
  for(let key in hash) {
    let value = hash[key];
    output[value] = key;
  }
  return output;
}
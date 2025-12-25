function babyCount(x) {
  // good luck - you'll need it!
  const freqRequired = {"b": 2, "a": 1, "y": 1};
  const freqCounter = {};
  for(let i = 0; i < x.length; i++) {
    let char = x[i].toLowerCase()
    if (char in freqCounter){
      freqCounter[char]++;
    } else {
      freqCounter[char] = 1;
    }
  }
  if (!freqCounter["a"] || !freqCounter["b"] || !freqCounter["y"]) return "Where's the baby?!";
  let count = 0;
  while (freqCounter["a"] > 0 && freqCounter["b"] > 1 && freqCounter["y"] > 0) {
    freqCounter["a"]--;
    freqCounter["y"]--;
    freqCounter["b"]-=2;
    count++;
  }
  return count;
}
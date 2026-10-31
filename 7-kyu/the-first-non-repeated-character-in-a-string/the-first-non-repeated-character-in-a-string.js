function firstNonRepeated(s) {
  // your code here
  const counter = { /* "t": [0, 1] */ };
  for(let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar in counter) {
      counter[currentChar][0] = i;
      counter[currentChar][1]++;
    } else {
      counter[currentChar] = [i, 1]
    }
  }
  let idxOfFirstUnique = Infinity;
  let firstUnique = null;
  for(let char in counter) {
    if (counter[char][1] === 1 && counter[char][0] < idxOfFirstUnique) {
      idxOfFirstUnique = counter[char][0];
      firstUnique = char;
    }
  }
  return firstUnique;
}
function firstDup(s) {
  // your solution here
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) > i) return s[i];
  }
}

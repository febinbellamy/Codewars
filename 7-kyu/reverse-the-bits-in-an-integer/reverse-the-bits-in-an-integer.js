function reverseBits (n) {
  // your code here
  return parseInt(n.toString(2).split('').reverse().join(''), 2)
}
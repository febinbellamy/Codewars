function getSumOfDigits(integer) {
  return integer.toString().split("").reduce((a,c) => +a + +c, 0);
}
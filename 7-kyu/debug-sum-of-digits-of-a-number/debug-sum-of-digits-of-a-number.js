function getSumOfDigits(integer) {
  return String(integer).split("").reduce((a,c) => Number(a) + Number(c), 0);
}
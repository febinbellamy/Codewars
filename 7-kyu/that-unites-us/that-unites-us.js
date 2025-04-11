function thatUnitesUs(array1, array2, n) {
  return Array.from(new Set([...array1, ...array2])).sort().slice(0, n);
}
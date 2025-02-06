function hotSingles(arr1, arr2) {
//WRITE YOUR CODE HERE!! GOOD LUCK
  const uniqueVals1 = new Set(arr1);
  const uniqueVals2 = new Set(arr2);
  const result = [];
  for (const value of uniqueVals1) {
    if (!uniqueVals2.has(value)) {
      result.push(value)
    }
  }
  for (const value of uniqueVals2) {
    if (!uniqueVals1.has(value)) {
      result.push(value)
    }
  }
  return result;
}
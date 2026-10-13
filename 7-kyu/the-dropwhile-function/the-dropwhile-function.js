function dropWhile(arr, predicate) {
  // Your Kafkaesque code here, plox... 
  for(let i=0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}
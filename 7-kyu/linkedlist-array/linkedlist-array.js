function listToArray(list) {
  //write your code here
  const result = [];
  let current = list;
  while(current) {
    result.push(current.value)
    current = current.next;
  }
  return result;
}
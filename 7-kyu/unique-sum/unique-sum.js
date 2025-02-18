function uniqueSum(lst){
  //your magic code goes here
  if (lst.length === 0) return null;
  const uniques = {};
  for(let num of lst) {
    if (!(num in uniques)) {
      uniques[num] = 1;
    }
  }
  return Object.keys(uniques).reduce((a,c) => +a + +c, 0)
}
function stairsIn20(s){
  let sum = 0;
  for(let weekdayArr of s) {
    sum += weekdayArr.reduce((a,c) => a + c, 0)
  }
  return sum * 20;
}
function stantonMeasure(a){
  let numOfOnes = 0;
  for(let elem of a) {
    if (elem === 1) numOfOnes++;
  }
  return a.filter((num) => num == numOfOnes).length;
}
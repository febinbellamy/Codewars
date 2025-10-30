function sumItUp(numbersWithBases){
  return numbersWithBases.reduce((a,c) => parseInt(c[0], c[1]) + a, 0);
}
​
​
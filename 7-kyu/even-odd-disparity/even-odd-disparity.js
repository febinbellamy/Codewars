function solve(a){
  let countEven = 0;
  let countOdd = 0;
  for(let i = 0; i < a.length; i++) {
    let currentElem = a[i];
    if (/[^0-9]/.test(currentElem)) continue;
    currentElem % 2 === 0 ? countEven++ : countOdd++;
  }
  return countEven - countOdd;
};
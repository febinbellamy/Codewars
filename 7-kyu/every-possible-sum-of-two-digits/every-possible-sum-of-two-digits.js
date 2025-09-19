function digits(num){
  const allPossibleSums = [];
  const strNum = String(num);
  let pointer1 = 0;
  while(pointer1 < strNum.length - 1) {
    let pointer2 = pointer1 + 1;
    let currentNum1 = +strNum[pointer1];
    while(pointer2 < strNum.length) {
      let currentNum2 = +strNum[pointer2];
      allPossibleSums.push(currentNum1 + currentNum2);
      pointer2++;
    }
    pointer1++;
  }
  return allPossibleSums;
}
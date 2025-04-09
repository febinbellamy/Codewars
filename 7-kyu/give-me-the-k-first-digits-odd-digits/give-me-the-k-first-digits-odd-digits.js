function findOddDigits(n, k) {
//Write your wonderful code here!
  let strNum = String(n);
  if (k > strNum.length || k === 0) return 0;
  let oddDigits = "";
  for(let i = 0; i < strNum.length; i++) {
    let currentDigit = +strNum[i];
    if (currentDigit % 2 !== 0 && oddDigits.length < k) {
      oddDigits += currentDigit;
    }
  }
  if (!oddDigits || k > oddDigits.length) return 0;  
  return +oddDigits;
}
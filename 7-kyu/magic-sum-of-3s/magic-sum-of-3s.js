function magicSum(numbers) {
  // TODO: Program Me
  let magicSumOfThree = 0;
  for(let i = 0; i < numbers.length; i++) {
    let strNum = String(numbers[i]);
    if (numbers[i] % 2 !== 0 && strNum.includes("3")) {
      magicSumOfThree += numbers[i];
    }
  }
  return magicSumOfThree;
}
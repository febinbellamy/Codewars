function f(n) {
  const primeNums = [];
  const numberOfEvens = [];

  const isPrime = (num) => {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  };

  for (let j = Math.ceil(n / 2); j < n; j++) {
    if (isPrime(j)) {
      let evenDigits = String(j)
        .split("")
        .filter((num) => +num % 2 === 0);
      numberOfEvens.push(evenDigits.length);
      primeNums.push(j);
    }
  }
  
  const maxVal = Math.max(...numberOfEvens);
  const lastIndexOf = numberOfEvens.lastIndexOf(maxVal);
  return primeNums[lastIndexOf];
}

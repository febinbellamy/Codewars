/* 
5 kyu 

Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)

Naming f(), the function that gives that prime, the above case and others will be like the following below.

f(1000) ---> 887 (even digits: 8, 8)

f(1210) ---> 1201 (even digits: 2, 0)

f(10000) ---> 8887

f(500) ---> 487

f(487) ---> 467

Features of the random tests:
Number of tests = 28
1000 <= n <= 5000000

*/

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

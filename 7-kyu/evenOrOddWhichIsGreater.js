/*
7 kyu

Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

– If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
– If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
– If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  const arrOfNums = str.split("");
  let sumOfOdds = 0;
  let sumOfEvens = 0;

  for (let i = 0; i < arrOfNums.length; i++) {
    let currentNum = +arrOfNums[i];
    if (currentNum % 2 === 0) {
      sumOfEvens += currentNum;
    } else {
      sumOfOdds += currentNum;
    }
  }

  if (sumOfOdds > sumOfEvens) {
    return "Odd is greater than Even";
  } else if (sumOfOdds < sumOfEvens) {
    return "Even is greater than Odd";
  } else {
    return "Even and Odd are the same";
  }
}

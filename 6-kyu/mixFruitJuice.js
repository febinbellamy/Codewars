/* 
6 kyu

Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

Input
The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input.

Example
['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)
*/

function mixFruit(arr) {
  const regularFruits = ["banana", "orange", "apple", "lemon", "grapes"];
  const specialFruits = ["avocado", "strawberry", "mango"];
  const prices = [];

  for (let i = 0; i < arr.length; i++) {
    let currentFruit = arr[i].toLowerCase();
    if (regularFruits.includes(currentFruit)) {
      prices.push(5);
    } else if (specialFruits.includes(currentFruit)) {
      prices.push(7);
    } else {
      prices.push(9);
    }
  }
  return Math.round(prices.reduce((a, c) => a + c, 0) / prices.length);
}

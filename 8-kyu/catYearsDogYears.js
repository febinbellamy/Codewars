/* 
8 kyu

I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

- humanYears >= 1
- humanYears are whole numbers only

Cat Years
- 15 cat years for first year
- +9 cat years for second year
- +4 cat years for each year after that

Dog Years
- 15 dog years for first year
- +9 dog years for second year
- +5 dog years for each year after that
*/

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!

  let dogYears = 0;
  let catYears = 0;
  let counter = 1;

  while (counter <= humanYears) {
    if (counter === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (counter === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
    counter++;
  }
  return [humanYears, catYears, dogYears];
};

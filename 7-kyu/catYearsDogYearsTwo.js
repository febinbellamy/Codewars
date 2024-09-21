/* 
7 kyu

This is related to my other Kata about cats and dogs.

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:
Results are truncated whole numbers of "human" years

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

var ownedCatAndDog = function (catYears, dogYears) {
  let catYearsCount = catYears;
  let catYearsResult = 0;
  let counter = 0;

  // calculate catYears
  while (catYearsCount - 4 >= 0) {
    if (counter === 0) {
      if (catYearsCount - 15 >= 0) {
        catYearsResult++;
        catYearsCount -= 15;
      } else {
        break;
      }
    } else if (counter === 1) {
      if (catYearsCount - 9 >= 0) {
        catYearsResult++;
        catYearsCount -= 9;
      } else {
        break;
      }
    } else if (counter > 1) {
      if (catYearsCount - 4 >= 0) {
        catYearsResult++;
        catYearsCount -= 4;
      } else {
        break;
      }
    }
    counter++;
  }

  // calculate dogYears
  let dogYearsCount = dogYears;
  let dogYearsResult = 0;
  let counter2 = 0;

  while (dogYearsCount - 5 >= 0) {
    if (counter2 === 0) {
      if (dogYearsCount - 15 >= 0) {
        dogYearsResult++;
        dogYearsCount -= 15;
      } else {
        break;
      }
    } else if (counter2 === 1) {
      if (dogYearsCount - 9 >= 0) {
        dogYearsResult++;
        dogYearsCount -= 9;
      } else {
        break;
      }
    } else if (counter2 > 1) {
      if (dogYearsCount - 5 >= 0) {
        dogYearsResult++;
        dogYearsCount -= 5;
      } else {
        break;
      }
    }
    counter2++;
  }
  return [catYearsResult, dogYearsResult];
};

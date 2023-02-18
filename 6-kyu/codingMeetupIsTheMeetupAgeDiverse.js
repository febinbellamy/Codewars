/* 
6 kyu

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:
- true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
- false otherwise.

For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

your function should return true as there is at least one developer from each age group.

Notes:
- The input array will always be valid and formatted as in the example above.
- Age is represented by a number which can be any positive integer up to 199.
*/

function isAgeDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)

  let minAge = 10;
  let maxAge = 19;

  while (maxAge < 109) {
    let filtertedArr = list.filter(
      (obj) => obj.age <= maxAge && obj.age >= minAge
    );
    if (filtertedArr.length === 0) return false;
    minAge += 10;
    maxAge += 10;
  }

  const centenarians = list.filter((obj) => obj.age >= 100);
  if (centenarians.length === 0) return false;
  return true;
}

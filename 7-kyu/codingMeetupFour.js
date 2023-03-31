/* 
7 kyu

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

- < firstName here >, < country here > of the first Python developer who has signed up; or
- There will be no Python developers if no Python developer has signed up.

For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

your function should return Victoria, Puerto Rico.

Notes:
- The input array will always be valid and formatted as in the example above.
*/

function getFirstPython(list) {
  // Thank you for checking out my kata :)
  const pythonDev = list.find(
    (developerObj) => developerObj["language"] === "Python"
  );
  return !pythonDev
    ? `There will be no Python developers`
    : `${pythonDev.firstName}, ${pythonDev.country}`;
}

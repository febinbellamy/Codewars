/* 
7 kyu

My 5th kata, and 1st in a planned series of rock climbing themed katas.

In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade). You will be given a list (lst) of climbing grades and you have to write a function (sort_grades) to return a list of the grades sorted easiest to hardest.

If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

Please do vote, rank, and provide any feedback on the kata.
*/

function sortGrades(lst) {
  //your code here

  // edge case: if lst is empty, return it.
  if (lst.length === 0) return lst;

  const gradesAndScores = { VB: 1, V0: 2, "V0+": 3 };

  // create an object of grades and their associated scores
  let counter = 1;

  while (counter <= 17) {
    let newGrade = `V${counter}`;
    gradesAndScores[newGrade] = counter + 3;
    counter++;
  }

  const arrOfObjs = [];

  // then loop through the input lst,
  // for each element (grade):
  // --> access the corresponding value (score) in gradesAndScores and store the key and score in an object
  // --> push this object into arrOfObjs

  for (let i = 0; i < lst.length; i++) {
    let currentGrade = lst[i];
    let currentScore = gradesAndScores[currentGrade];
    arrOfObjs.push({ grade: currentGrade, score: currentScore });
  }

  // return the sorted grades in an array
  return arrOfObjs.sort((a, b) => a.score - b.score).map((obj) => obj["grade"]);
}

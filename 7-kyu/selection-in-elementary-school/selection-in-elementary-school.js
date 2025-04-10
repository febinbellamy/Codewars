function schoolSelection(array) {
  //good luck
  const result = {"Kindergarten": 0, "1st grade": 0, "2nd grade": 0, "3rd grade": 0, "4th grade": 0};
  const gradesAndAges = {5: "Kindergarten", 6: "1st grade", 7: "2nd grade", 8: "3rd grade", 9: "4th grade"};
  for(let age of array) {
    if (age in gradesAndAges) {
      let grade = gradesAndAges[age];
      result[grade]++;
    }
  }
  return result;
}
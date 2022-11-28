/* 
5 kyu

This time the input is a sequence of course-ids that are formatted in the following way:

name-yymm
The return of the function shall first be sorted by yymm, then by the name (which varies in length).
*/

// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
sortme = function (courses) {
  if (courses.length === 0) return [];

  const arrOfCourseObjs = [];

  for (let i = 0; i < courses.length; i++) {
    let newObj = {};
    let currentCourse = courses[i];

    newObj["nameAndID"] = currentCourse;

    let indexOfDash = currentCourse.indexOf("-");
    newObj["name"] = currentCourse.slice(0, indexOfDash);

    newObj["id"] = +currentCourse.slice(indexOfDash + 1);
    arrOfCourseObjs.push(newObj);
  }

  arrOfCourseObjs.sort((course1, course2) => {
    if (course1.id > course2.id) return 1;
    if (course1.id < course2.id) return -1;
    if (course1.name > course2.name) return 1;
    if (course1.name < course2.name) return -1;
  });

  const finalArr = [];

  for (let courseObj of arrOfCourseObjs) {
    finalArr.push(courseObj["nameAndID"]);
  }

  return finalArr;
};

/* 
6 kyu

Tale University is a bit messy, and can't maintain an ordered list of their student. Tale's dean wants to print a sortet list of his students by the gpa, last name and age and post it on the walls so everybody can be impressed of his great students.

Given a list of students, sort them by (from most important to least important):

- GPA (descending)
- First letter of last name (ascending)
- Age (ascending)

And the class Student:
class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  };
};

Return the sorted result as full names string, comma separated.

For Example, given the list (name, age, gpa):
- David Goodman, 23, 88
- Mark Rose, 25, 82
- Jane Doe, 22, 90
- Jane Dane, 25, 90

sort(students) should return "Jane Doe,Jane Dane,David Goodman,Mark Rose"
*/

function sort(students) {
  let finalStr = "";

  students.sort((objA, objB) => {
    // gpa descending
    if (objA.gpa < objB.gpa) return 1;
    if (objA.gpa > objB.gpa) return -1;

    // first letter of last name - ascending
    if (objA.fullName.split(" ")[1][0] < objB.fullName.split(" ")[1][0])
      return -1;
    if (objA.fullName.split(" ")[1][0] > objB.fullName.split(" ")[1][0])
      return 1;

    // age
    if (objA.age < objB.age) return -1;
    if (objA.age > objB.age) return 1;
  });

  for (let i = 0; i < students.length; i++) {
    let currentStudentObj = students[i];
    finalStr += `${currentStudentObj.fullName}${
      i !== students.length - 1 ? "," : ""
    }`;
  }

  return finalStr;
}

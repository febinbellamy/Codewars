function lineupStudents(students){
  //your code here
  
  const studentsArray = students.split(' ');
  
  studentsArray.sort((a,b) => {
    if (a.length === b.length) {
      if (a > b) return -1;
      if (a < b) return 1;
    } 
    if (a.length > b.length) {
      return -1
    } else {
      return 1;
    }
  })
  
  return studentsArray;
}
/* 
6 kyu

It might be déjà vu, or it might be a duplicate day. You’re well trained in the arts of cleaning up duplicates. Someone has hacked your database and injected all kinds of duplicate records into your tables. You don’t have access to modify the data in the tables or restore the tables to a previous time because the DBA’s are gone.

You are provided with an array of employees from the server. Your task is to write the findDuplicates function to remove the duplicate records after they are sent down to the client.

Employee Class:
var Employee = function() {
  this.FirstName = '';
  this.LastName = '';
  this.UserName = '';
};

The result of calling the findDuplicates function should be an array of the Employee objects that are the duplicates. findDuplicates should also perform an in place modification of the array it's given (employees), removing the duplicate values.

Assumptions:
- You can assume that the employees parameter passed in to findDuplicates is always an array.
- You can also assume that the employees array is a flat array.
*/

function findDuplicates(employees) {
  // go and find them!

  const duplicatesArr = [];
  for (let i = 0; i < employees.length; i++) {
    let employeeObj = employees[i];
    if (employees.indexOf(employeeObj) !== i) {
      duplicatesArr.push(employeeObj);
      employees.splice(i, 1);
      i--;
    }
  }
  return duplicatesArr;
}

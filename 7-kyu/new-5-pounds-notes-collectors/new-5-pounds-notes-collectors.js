function getNewNotes(salary,bills){
  // code it away!!! 
  const totalBills = bills.reduce((a,c) => a+c, 0)
  const remainingSalary = salary - totalBills;
  return remainingSalary > 0 ? Math.floor(remainingSalary / 5) : 0;
}
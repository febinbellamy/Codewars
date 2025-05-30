function killcount(counselors, jason){
  const result = [];
  for(let counselorArr of counselors) {
    if (counselorArr[1] < jason) {
      result.push(counselorArr[0])
    }
  }
  return result;
}
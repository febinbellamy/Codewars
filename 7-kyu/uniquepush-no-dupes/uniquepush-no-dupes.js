//only push obj onto arr if it has a unique phoneNumber
function uniquePush(arr, obj) {
  if (!("phoneNumber" in obj)) return false  
  for (let personObj of arr) {
    if (personObj["phoneNumber"] === obj["phoneNumber"]) {
      return false;
    }
  }
  arr.push(obj);
  return true;
}
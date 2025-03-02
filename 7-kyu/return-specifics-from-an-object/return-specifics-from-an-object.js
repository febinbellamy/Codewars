function returnSpecifics(obj){
  if (Object.keys(obj).length === 0) return ["The Object is Empty"];
  const numbers = [];
  const functions = [];
  for(let key in obj) {
    let value = obj[key];
    if (typeof value === "number") {
      numbers.push(value)
    } else if (typeof value === "function") {
      functions.push(key)
    }
  }
  return [...numbers, ...functions];
}
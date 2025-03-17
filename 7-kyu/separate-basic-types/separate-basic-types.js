function separateTypes(input) {
  const nums = [];
  const strs = [];
  const bools = [];
  for(let elem of input) {
    if (typeof elem === "number") {
      nums.push(elem)
    } else if (typeof elem === "string") {
      strs.push(elem)
    } else if (typeof elem === "boolean") {
      bools.push(elem);
    }
  }
  const result = {};
  if (nums.length > 0) {
    result["number"] = nums;
  }
  if (strs.length > 0) {
    result["string"] = strs;
  }
  if (bools.length > 0) {
    result["boolean"] = bools;
  }
  return result;
}
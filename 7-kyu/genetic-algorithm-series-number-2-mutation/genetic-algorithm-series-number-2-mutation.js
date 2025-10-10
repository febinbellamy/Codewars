const mutate = (chromosome, p) => {
  if (p === 0) return chromosome;
  if (p === 1) {
    return chromosome.split("").map((elem) => elem == "0" ? "1" : "0").join("")
  }
  let result = "";
  for(let char of chromosome) {
    let chance = p * 100;
    let randomNum = Math.floor(Math.random() * 101);
    if (randomNum > chance) {
      result += char === "0" ? "1" : "0"
    } else {
      result += char;
    }
  }
  return result;
};
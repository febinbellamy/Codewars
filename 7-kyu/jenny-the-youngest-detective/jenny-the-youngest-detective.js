function missingWord(nums, str) {
  const letters = str.split('').filter((char) => /[a-zA-Z]/.test(char))
  nums.sort((a,b) => a-b);
  let result = "";
  nums.forEach((num) => result += letters[num]);
  if (result.includes("undefined")) return "No mission today"
  return result.toLowerCase();
}
function removeNoise(str){
  // write your code below
  return str.split("").filter(char => /[^%$&/#·@|º\\ª]/.test(char)).join("");
}
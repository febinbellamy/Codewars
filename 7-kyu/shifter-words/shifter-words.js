function shifter(s){
  // your code here
  if (!s) return 0;
  const letters = "HINOSXZMW";
  const words = s.split(" ");
  let count = 0;
  for(let i = 0; i < words.length; i++ ) {
    let word = words[i];
    let numOfShifterLettersInWord = word.split("").filter((char) => letters.includes(char)).length;
    if (word.length === numOfShifterLettersInWord && words.indexOf(word) === i) {
      count++;
    }
  }
  return count;
}
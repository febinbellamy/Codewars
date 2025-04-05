function isKiss( words ){
  // Have Fun!
  const wordsArr = words.split(" ");
  for(let word of wordsArr) {
    if (word.length > wordsArr.length) {
      return "Keep It Simple Stupid"
    }
  }
  return "Good work Joe!";
}
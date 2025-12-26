function weRateDogs(str, rating){
 //write code here
  const wordsArr = str.split(" ");
  for(let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].includes("/")) {
      wordsArr[i] = `${rating}/10`;
    }
  }
  return wordsArr.join(" "); 
}
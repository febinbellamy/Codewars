const fix = (paragraph) => {
  const result = [];
  const sentences = paragraph.split(".");
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    if (sentence === "") {
      result.push("");
      continue;
    }
    let beginningOfSentence;
    let restOfSentence;
    if (sentence[0] === " ") {
      beginningOfSentence = sentence[0] + sentence[1].toUpperCase();
      restOfSentence = sentence.slice(2);
    } else {
      beginningOfSentence = sentence[0].toUpperCase();
      restOfSentence = sentence.slice(1);
    }
    result.push(beginningOfSentence + restOfSentence); 
  }
  return result.join(".");
}
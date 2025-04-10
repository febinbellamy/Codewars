function spanishSent(arr) {
  //good luck
  let count = 0;
  for(let phrase of arr) {
    let firstChar = phrase[0];
    let lastChar = phrase[phrase.length - 1];
    if (firstChar === "¿" && lastChar === "?" || firstChar === "¡" && lastChar === "!") {
      count++;
    }
  }
  return `¡${count} spanish sentence${count === 1 ? "" : "s"} here and hasta la vista, baby!`
}
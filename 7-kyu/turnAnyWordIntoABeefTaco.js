function tacofy(word) {
  // Code here

  const finalArr = ["shell"];
  const letterToWord = {
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
  };

  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i].toLowerCase();
    if (/[aeiou]/.test(currentLetter)) {
      finalArr.push("beef");
    } else if (letterToWord[currentLetter]) {
      finalArr.push(letterToWord[currentLetter]);
    }
  }
  finalArr.push("shell");
  return finalArr;
}

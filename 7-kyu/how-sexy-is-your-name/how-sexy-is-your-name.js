function sexyName(name) {
  const finalScore = name.toUpperCase().split('').map((letter) => letter in SCORES ? SCORES[letter] : 0).reduce((a,c) => a+c, 0);
  if (finalScore <= 60) {
    return "NOT TOO SEXY"
  } else if (finalScore >= 61 && finalScore <= 300) {
    return "PRETTY SEXY"
  } else if (finalScore >= 301 && finalScore <= 599) {
    return "VERY SEXY"
  } else {
    return "THE ULTIMATE SEXIEST";
  }
}
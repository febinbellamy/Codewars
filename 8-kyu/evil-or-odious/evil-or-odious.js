function evil(n) {
  const numberOfOnes = n.toString(2).split("").filter(char => char === "1").length;
  return numberOfOnes % 2 === 0 ? "It's Evil!" : "It's Odious!";
}
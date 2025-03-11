function wdm(talk){
  const notAllowed = ["puke", "hiccup", ""];
  return talk.split(" ").filter((word) => !notAllowed.includes(word)).join(" ")
}
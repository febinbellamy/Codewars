function match(usefulness, months) {
  //will it match
  let needs = 100;
  for(let i = 0; i < months; i++) needs *= .85;
  return usefulness.reduce((a,c) => a+c,0) >= needs ? "Match!" : "No match!";
}
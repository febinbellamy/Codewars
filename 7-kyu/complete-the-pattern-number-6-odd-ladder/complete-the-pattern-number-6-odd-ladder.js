function pattern(n){
  // Happy Coding ^_^
  let output= "";
  for(let i = 1; i <= n; i+=2) {
    output += String(i).repeat(i);
    if (i < n - 1) output += "\n";
  }
  return output;
}
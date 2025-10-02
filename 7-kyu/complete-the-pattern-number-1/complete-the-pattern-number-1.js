function pattern(n){
 var output="";
   // Happy Coding ^_^
  for(let i = 1; i <= n; i++) {
    output += `${String(i).repeat(i)}${i !== n ? "\n" : ""}`;
  }
  return output;
}
function calc(x){
  let total1 = x.split("").map((char)=> char.charCodeAt(0));
  const total2 = total1.join("").replaceAll("7", "1").split("").reduce((a,c) => Number(a)+ Number(c),0);
  total1 = total1.join("").split("").reduce((a,c) => Number(a) + Number(c), 0);
  return total1 - total2;
}
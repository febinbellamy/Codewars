const sing=()=>{
  const result = []
  let o = 'on the wall'
  let t = 'Take one down and pass it around'
  let ob = 'of beer'
  for(let i=99;i>0;i--){
    let b = 'bottle'
    let c = i > 1 ? "s" : "";
    let m;
    if (i == 1) {
      m = "no more bottles"
    } else if (i - 1 > 1) {
      m = `${i - 1} bottles`
    } else {
      m = `1 ${b}`
    }
    result.push(`${i} ${b}${c} ${ob} ${o}, ${i} ${b}${c} ${ob}.`, `${t}, ${m} ${ob} ${o}.`);    
  }
  return [...result, `No more bottles of beer on the wall, no more bottles of beer.`, `Go to the store and buy some more, 99 bottles ${ob} ${o}.`]
}
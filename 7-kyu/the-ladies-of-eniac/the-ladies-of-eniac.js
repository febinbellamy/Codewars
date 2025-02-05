function radLadies(name){
//reveal the rad ladies of ENIAC!
  return name.split('').filter((char) => /[\sA-Za-z!]/.test(char)).join('').toUpperCase()
}
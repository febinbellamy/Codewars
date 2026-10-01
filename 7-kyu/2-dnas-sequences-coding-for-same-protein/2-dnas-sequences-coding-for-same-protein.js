function codeForSameProtein(seq1,seq2){
  //your code here - values loaded in the "codons" variable
  for(let i = 0; i < seq1.length; i+=3) {
    let currSeq1 = seq1.slice(i, i+3)
    let currSeq2 = seq2.slice(i, i+3)
    if (codons[currSeq1] !== codons[currSeq2]) return false;
  }
  return true;
}
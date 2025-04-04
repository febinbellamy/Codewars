function checkNucleotides(sequence) {
  for(let i = 0; i < sequence.length; i++) {
    if (/[^AGCU]/.test(sequence[i])) {
      return `There is an invalid letter: ${sequence[i]}. At position: ${i + 1}`
    }
  }
  return `Valid Sequence: ${sequence}`
}
/* 
7 kyu 

In genetic the reverse complement of a sequence is formed by reversing the sequence and then taking the complement of each symbol.

The four nucleotides in DNA is Adenine (A), Cytosine (C), Guanine (G) and Thymine (Thymine).
- A is the complement of T
- C is the complement of G.

This is a bi-directional relation so:
– T is the complement of A
- G is the complement of C.

For this kata you need to complete the reverse complement function that take a DNA string and return the reverse complement string.

Note: You need to take care of lower and upper case. And if a sequence conatains some invalid characters you need to return "Invalid sequence".

This kata is based on the following one but with a little step in addition.
*/

function reverseComplement(dna) {
  const complements = { A: "T", C: "G", T: "A", G: "C" };
  const reversedSequence = dna.split("").reverse();
  let result = "";

  for (let i = 0; i < reversedSequence.length; i++) {
    let currentChar = reversedSequence[i];
    if (
      currentChar.toLowerCase() === currentChar &&
      currentChar.toUpperCase() in complements
    ) {
      result += complements[currentChar].toLowerCase();
    } else if (currentChar in complements) {
      result += complements[currentChar];
    } else {
      return "Invalid sequence";
    }
  }
  return result;
}

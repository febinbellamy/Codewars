/* 
7 kyu

In music, each note is named by its pitch class (e.g., C, E♭, F♯), and each pitch class can alternatively be expressed as an integer from 0 to 11. Your task will be to write a method called pitch_class (JS:  pitchClass ) that, when given a letter-based pitch class, returns the corresponding integer.

Only seven letters are used to name the notes: "A" through "G." These letter names are cyclical, just like the days of the week. The notes corresponding to those letters are called the "natural notes." Here are the numbers corresponding to each of them:

C : 0
D : 2
E : 4
F : 5
G : 7
A : 9
B : 11

So pitch_class('D') (JS:  pitchClass('D') ) should return 2, and pitch_class('B') (JS:  pitchClass('B') ) should return 11.

The sharp sign ("♯") is essentially an increment operator, so "C♯" (pronounced "C sharp") refers to one note higher than C, which has a value of 1, whereas F♯ has a value of 6. Since Codewars doesn't allow the sharp sign, we'll use a number sign ("#") instead.

The flat sign ("♭") is the opposite of a sharp, meaning one note lower. F♭ has a value of 4, and C♭ has a value of 11 (the twelve-note system is cyclical). Since Codewars doesn't allow the flat sign, we'll use a lowercase "b" instead.

Return nil (JS:  null ) for invalid input.

(Next in this series: http://www.codewars.com/kata/integer-to-musical-pitch-classes)
*/

function pitchClass(note) {
  const notes = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  if (note.length === 1) {
    return notes[note];
  }
  if (note[1] === "b") {
    if (note[0] === "C") return 11;
    return notes[note[0]] - 1;
  } else if (note[1] === "#") {
    if (note[0] === "B") return 0;
    return notes[note[0]] + 1;
  } else {
    return null;
  }
}

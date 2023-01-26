/* 
7 kyu

Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]
B = [t, g, g, i, k, f]
difference = [a, e, g, j, k]
*/

function diff(a, b) {
  //your code here\

  const missingLettersInB = a.filter(
    (elem, index) => b.indexOf(elem) === -1 && a.indexOf(elem) === index
  );
  const missingLettersInA = b.filter(
    (elem, index) => a.indexOf(elem) === -1 && b.indexOf(elem) === index
  );

  return [...missingLettersInA, ...missingLettersInB].sort();
}

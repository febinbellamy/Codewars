/* 
5 kyu

In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

n=7, k=3 => means 7 people in a circle
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!

The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.
*/

function josephusSurvivor(n, k) {
  //your code here

  const items = [];
  for (let i = 1; i <= n; i++) {
    items.push(i);
  }

  if (items.length === 0) return [];
  let index = k - 1;
  const removedElements = [];

  if (index >= items.length) {
    while (index >= items.length) {
      let prevNewIndex = index;
      index = Math.abs(items.length - prevNewIndex);
    }
  }

  while (items.length !== 0) {
    let elementToRemove = items[index];
    removedElements.push(elementToRemove);
    items.splice(index, 1);

    let newIndex = index + (k - 1);

    if (newIndex >= items.length && items.length > 0) {
      while (newIndex >= items.length) {
        let prevNewIndex = newIndex;
        newIndex = Math.abs(items.length - prevNewIndex);
      }
    }
    index = newIndex;
  }
  return removedElements[removedElements.length - 1];
}

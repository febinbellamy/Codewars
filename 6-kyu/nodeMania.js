/* 
6 kyu

This kata is about singly-linked lists. A linked list is an ordered set of data elements, each containing a link to its successor (and sometimes its predecessor, known as a double linked list). You are you to implement an algorithm to find the kth to last element.

k will be an integer greater than or equal to 1.

Example
For example given the following linked list: a -> b -> c -> d

if k = 1 then d should be returned
if k = 2 then c should be returned
if k = 3 then b should be returned
if k = 4 then a should be returned
if k exceeds the length of the list then None(Python) or null(Java, JavaScript) or false (C) should be returned

Each item in the linked list is a Node containing two fields:
data - the value of the node
next - pointing to the next node in the list, or to a null reference (null/NULL/None, depending on your language) for the last Node.

An empty list is represented as a null reference.
*/

/*  
Preloaded class Node {
  data; //The value at the current node
  next; //The next node in the linkedList
}
*/
function searchKFromEnd(linkedList, k) {
  // Magic goes here
  if (!linkedList) return null;
  let current = linkedList;
  let total = 0;
  while (current) {
    total++;
    current = current.next;
  }
  if (k > total) return null;

  current = linkedList;
  while (current) {
    if (total === k) {
      return current.data;
    }
    total--;
    current = current.next;
  }
}

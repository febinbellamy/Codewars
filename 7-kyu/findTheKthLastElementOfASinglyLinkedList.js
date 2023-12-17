/* 
7 kyu

Write a function that given the head of singly linked list, and an index (0 based) counted from the end of the list, returns the element corresponding to that index.

The function must return a falsy value for invalid input values, like an out of range index.

So for the list 66 -> 42 -> 13 -> 666, getKthLastElement() with index 2 should return the Node (predefined object for list nodes) corresponding to 42.

Other examples:
getKthLastElement(1 -> 2 -> 3 -> null, 0).data === 3
getKthLastElement(1 -> 2 -> 3 -> null, 1).data === 2
*/

/* Predefined object for list nodes

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

*/

function getKthLastElement(head, k) {
  if (!head || k < 0) return null;

  let count = -1;
  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  if (k > count) return null;

  current = head;
  while (current) {
    if (count === k) {
      return current;
    }
    count--;
    current = current.next;
  }
}

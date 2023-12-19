/* 
7 kyu

Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

The linked list is defined as follows:
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

Note: the list may be null and can hold any type of value.

Good luck!
*/

function indexOf(head, value) {
  if (!head) return -1;

  let current = head;
  let position = 0;
  while (current) {
    if (current.data === value) return position;
    current = current.next;
    position++;
  }
  return -1;
}

/* 
6 kyu

Implement the method filter, which accepts a linked list (head) and a predicate function, and returns a new linked list (head) which only contains the elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

Note: the list may be null.

Good luck!
*/

function filter(head, p) {
  let newLinkedListDummy = new Node(0);
  let currentNewLL = newLinkedListDummy;
  let current = head;

  while (current) {
    if (p(current.data) === true) {
      currentNewLL.next = new Node(current.data);
      currentNewLL = currentNewLL.next;
    }
    current = current.next;
  }
  return newLinkedListDummy.next;
}

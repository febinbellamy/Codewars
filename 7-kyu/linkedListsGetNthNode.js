/* 
7 kyu

Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2

The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  // Your code goes here.
  if (!node) throw new Error("You've passed in a null linked list!");
  let position = 0;
  let current = node;

  while (current) {
    if (position === index) {
      return current;
    } else {
      position += 1;
      current = current.next;
    }
  }
  throw new Error("You've passed in an invalid index value!");
}

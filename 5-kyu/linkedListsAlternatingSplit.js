/* 
5 kyu

Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.

var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
alternatingSplit(list).first === 1 -> 3 -> 5 -> null
alternatingSplit(list).second === 2 -> 4 -> null

For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by AlternatingSplit().

If the passed in head node is null/None/nil or a single node, throw an error.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  // Your code goes here.
  // Remember to return the context.

  if (!head || !head.next) {
    throw new Error("Invalid input!");
  }

  let newHead1 = new Node(head.data);
  let newHead2 = new Node(head.next.data);
  let index = 2;

  let currentOriginal = head.next.next;
  let current1 = newHead1;
  let current2 = newHead2;

  while (currentOriginal) {
    let newNode = new Node(currentOriginal.data);

    if (index % 2 === 0) {
      current1.next = newNode;
      current1 = current1.next;
    } else {
      current2.next = newNode;
      current2 = current2.next;
    }
    index++;
    currentOriginal = currentOriginal.next;
  }
  return new Context(newHead1, newHead2);
}

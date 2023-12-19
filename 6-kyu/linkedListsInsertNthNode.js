/* 
6 kyu

Linked Lists - Insert Nth

Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)

You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  // Your code goes here.
  // Return the head of the list.

  let position = 0;

  if (index < 0) {
    throw new Error("The index is too small");
  }

  let newNode = new Node(data);

  if (!head) return newNode;

  let current = head;
  let prev = null;

  while (current) {
    if (index === position) {
      newNode.next = current;
      if (prev) {
        prev.next = newNode;
      }
      return position === 0 ? newNode : head;
    }
    position++;
    prev = current;
    current = current.next;
  }
  if (index === position) {
    newNode.next = current;
    prev.next = newNode;
    return head;
  }

  if (index > position) throw new Error("The index is too large");
}

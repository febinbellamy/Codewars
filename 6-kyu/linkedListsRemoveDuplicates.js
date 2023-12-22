/* 
6 kyu

Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null

If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.

The push() and buildOneTwoThree() functions need not be redefined.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  // Your code goes here.
  // Remember to return the head of the list.

  // if it's an empty linked list, return null;
  if (!head) return null;

  // store the node values we've already seen in the visited dictionary
  const visited = {};
  let current = head;
  let prev = null;

  // traverse through the linked list until current is null
  while (current) {
    // if current is a unique node, add it to visited
    if (!(current.data in visited)) {
      visited[current.data] = 1;
      prev = current;
      current = current.next;
    } else {
      // otherwise, it's a duplicate. remove it!
      let next = current.next;
      prev.next = next;
      current = next;
    }
  }
  return head;
}

/* 
7 kyu

Preloaded for you is a class, struct or derived data type Node ( depending on the language ) used to construct linked lists in this Kata:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

Prerequisites
This Kata assumes that you are already familiar with the idea of a linked list. If you do not know what that is, you may want to read this article on Wikipedia. Specifically, the linked lists this Kata is referring to are singly linked lists, where the value of a specific node is stored in its data / $data / Data property, the reference to the next node is stored in its next / $next / Next / next_node property and the terminator for a list is null / NULL / None / nil / nullptr / null().

Task
Create a function stringify which accepts an argument list / $list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data / $data / Data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null / NULL / None / nil / nullptr / null() ( all caps or all lowercase depending on the language you are undertaking this Kata in ). For example, given the following list:
new Node(1, new Node(2, new Node(3)))
... its string representation would be:
"1 -> 2 -> 3 -> null"

And given the following linked list:
new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
... its string representation would be:
"0 -> 1 -> 4 -> 9 -> 16 -> null"

Note that null / NULL / None / nil / nullptr / null() itself is also considered a valid linked list. In that case, its string representation would simply be "null" / "NULL" / "None" / "nil" / "nullptr" / @"NULL" / "null()" ( again, depending on the language ).

For the simplicity of this Kata, you may assume that any Node in this Kata may only contain non-negative integer values. For example, you will not encounter a Node whose data / $data / Data property is "Hello World".
*/

function stringify(list) {
  if (!list) return "null";

  let finalStr = "";

  let current = list;
  while (current) {
    finalStr += `${current.data} -> `;
    current = current.next;
  }
  finalStr += "null";
  return finalStr;
}

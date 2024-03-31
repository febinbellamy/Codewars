/* 
6 kyu

Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null

Write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:
10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3
*/

// return the sum of all values in the tree, including the root
function sumTheTreeValues(root) {
  // your code here
  if (root === null) {
    return 0;
  }
  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    let node = queue.shift();
    sum += node.value;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return sum;
}

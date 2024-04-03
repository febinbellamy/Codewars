/* 
7 kyu

Given a number and a binary tree ( not a Binary Search Tree! ):

– return True/true if the given number is in the tree
– return False/false if it isn't
*/

function search(n, root) {
  // Determines if a value is in a binary tree (NOT bst)
  // Your code here!
  if (!root) return false;

  const stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.value === n) return true;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return false;
}

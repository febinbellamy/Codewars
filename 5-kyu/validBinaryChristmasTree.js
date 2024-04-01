/* 
5 kyu

Happy Holidays fellow Code Warriors!
Santa just finished taking a data structures course, and thought it would be a great idea to build a Binary Christmas Tree! All of Santa's helpers created a Binary Christmas Tree, but not all of them meet his requirements. Can you write some code to validate the Binary Christmas Trees?

Valid Binary Christmas Tree
Write a function isValidTree that accepts a Binary Tree, and returns true if it meets Santa's requirements, false otherwise. Since the tree is a binary tree, each node can have 0, 1, or 2 children. The left and right properties can be used to access the current nodes left and right children. All nodes have an ornament property, which is the name of the ornament, and a color property, which represents the color of the ornament.

Santa's Binary Christmas Tree Requirements
A valid Binary Christmas Tree will meet the following requirements:
– Root node has a 'star' ornament
– Nodes with zero children (excluding the root node) have a 'blue' colored ornament
– Nodes with one or two children (excluding the root node) have a 'red' colored ornament

Examples:
isValidTree( {
  ornament: 'star', 
  color: 'yellow'
} )// => returns true

isValidTree( {
  ornament: 'star',
  color: 'yellow',
  left: {
    ornament: 'candy cane',
    color: 'blue'
  }
} )// => returns true

isValidTree( {
  ornament: 'star',
  color: 'yellow',
  right: {
    ornament: 'stocking',
    color: 'red'
  }
} )// => returns false
*/

function isValidTree(tree) {
  //TODO
  if (!tree || tree.ornament !== "star") return false;

  const queue = [tree];
  let node = queue.shift();
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);

  while (queue.length > 0) {
    node = queue.shift();
    if (!node.left && !node.right && node.color !== "blue") return false;
    if ((node.left || node.right) && node.color !== "red") return false;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return true;
}

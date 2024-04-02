/* 
5 kyu

Given the root of a tree with an arbitrary number of child nodes, return a list containing the nodes' data in breadth-first order (left to right, top to bottom).

Child nodes are stored in a list. An empty tree is represented by an empty list.

Example:

           1
          / \
         2   3  -> [1,2,3,4,5,6,7]
        /|\   \
       4 5 6   7
*/

/* preloaded Node definition :
class Node {
  constructor (data, children = []) {
    this.data = data;
    this.children = children;
  }
}
*/

function treeToArray(tree) {
  if (!tree || tree.length === 0) return [];
  const result = [];
  const queue = [tree];
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.data);
    if (node.children) queue.push(...node["children"]);
  }
  return result;
}

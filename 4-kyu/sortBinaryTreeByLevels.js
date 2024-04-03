/* 
4 kyu

You are given a binary tree:
class TreeNode
  attr_accessor :left
  attr_accessor :right
  attr_reader :value
end

Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

Return empty array if root is nil.

Example 1 - following tree:
                 2
            8        9
          1  3     4   5

Should return following list: [2,8,9,1,3,4,5]

Example 2 - following tree:
                 1
            8        4
              3        5
                         7
                         
Should return following list: [1,8,4,3,5,7]
*/

function treeByLevels(rootNode) {
  if (!rootNode) return [];
  const queue = [rootNode];
  const result = [];
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

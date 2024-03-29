'''
7 kyu

You are given a binary tree. Implement the method findMax which returns the maximal node value in the tree.

For example, maximum in the following Tree is 11.

              7
            /   \ 
           /     \
          5       2
           \       \
           6        11          
           /\      /
          1  9   4

Note:
– Tree node values any integer value.
– Tree can unbalanced and unsorted.
– The root argument is never an empty tree.

You are given a tree node class as follows:
class TreeNode {
  TreeNode  left;
  TreeNode  right;
  int value;
}
'''

def find_max(root):
    queue = [root]
    max_value = float('-inf')
    
    while len(queue) > 0:
        node = queue.pop(0)
        max_value = max(node.value, max_value)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    
    return max_value
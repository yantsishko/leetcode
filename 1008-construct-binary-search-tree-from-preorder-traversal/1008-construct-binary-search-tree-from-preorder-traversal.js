/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (!preorder.length) return [];

    const [root] = preorder
    let rootNode = new TreeNode(root);
    
    for (let i = 1; i < preorder.length; i++) {
        rootNode = insert(rootNode, preorder[i]);
    }
    
    return rootNode;
};

const insert = (root, val) => {
  if (root === null) return new TreeNode(val);

  if (val < root.val) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }

  return root;
};
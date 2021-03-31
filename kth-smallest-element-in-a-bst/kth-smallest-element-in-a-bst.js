/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) return 0;

    let min = k;
    const minValues = [];

    const bfs = (node) => {
        if (node === null) return;
  
        bfs(node.left);
        minValues.push(node.val);
        bfs(node.right);
       
    }
    bfs(root);

    return minValues[k - 1];
};
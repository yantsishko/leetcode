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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;
    let isExist = false;
    const dfs = (node, accum) => {
        if (
            !node.left
            && !node.right
            && accum === sum
            && !isExist) {
            isExist = true;
        }
        if (node.left) {
            dfs(node.left, accum + node.left.val)
        }
        if (node.right) {
            dfs(node.right, accum + node.right.val);
        }
    }
    
    dfs(root, root.val);
    
    return isExist;
};
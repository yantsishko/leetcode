/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    const dfs = (root) => {
        if (!root) return;
        if (root.val >= L && root.val <= R) {
            sum += root.val;
        }
        dfs(root.left);
        dfs(root.right);
    }
    
    dfs(root);
    
    return sum;
};
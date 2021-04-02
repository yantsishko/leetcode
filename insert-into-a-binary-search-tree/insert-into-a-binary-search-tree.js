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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const dfs = (root) => {
        if (!root.left && val < root.val) {
            root.left = new TreeNode(val);
            return;
        }
        if (!root.right && val > root.val) {
            root.right = new TreeNode(val);
            return;
        }
        if (root.left && val < root.val) {
            dfs(root.left);
        }

        if (root.right && val > root.val) {
            dfs(root.right);
        }
    }
    
    if (!root) return new TreeNode(val);
    dfs(root);
    
    return root;
};
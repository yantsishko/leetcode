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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    
    function dfs(node) {
        if(!node) {
            return;
        }
        const nodeRight = node.right;
        const nodeLeft = node.left;
        node.left = nodeRight;
        dfs(nodeRight);
        node.right = nodeLeft;
        dfs(nodeLeft);
    }
    
    dfs(root);
    
    return root;
};
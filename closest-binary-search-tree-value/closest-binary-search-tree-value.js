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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let currentMax = root.val;
    const dfs = (node) => {
        if (!node) return;
        if (Math.abs(target - currentMax) > Math.abs(target - node.val)) {
            currentMax = node.val;
        }
        if (target < node.val) {
             dfs(node.left);
        }
        if (target > node.val) {
             dfs(node.right);
        }
        
    }
    
    dfs(root);
    
    return currentMax;
};
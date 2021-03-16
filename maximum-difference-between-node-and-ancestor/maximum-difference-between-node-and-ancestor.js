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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    const dfs = (node, max, min) => {
        if (!node) {
            return max - min;
        }

        const currentMax = Math.max(max, node.val);
        const currentMin = Math.min(min, node.val);

        const left = dfs(node.left, currentMax, currentMin);
        const right = dfs(node.right, currentMax, currentMin);

        return Math.max(left, right);
    }
    
    return dfs(root, root.val, root.val)
};
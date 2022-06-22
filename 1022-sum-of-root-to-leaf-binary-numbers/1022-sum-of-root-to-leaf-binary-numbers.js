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
var sumRootToLeaf = function(root) {
    let result = 0;
    if (!root) return result;

    const dfs = (root, value) => {
        if (root.left) {
            dfs(root.left, value + root.left.val.toString());
        }

        if (root.right) {
            dfs(root.right, value + root.right.val.toString());
        }
        
        if (!root.left && !root.right) {
            result += parseInt(value, 2);
        }
        
    }
    
    dfs(root, root.val.toString());
    
    return result;
};
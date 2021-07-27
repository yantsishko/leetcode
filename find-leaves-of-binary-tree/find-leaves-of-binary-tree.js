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
 * @return {number[][]}
 * T = O(N)
 * S = O(N)
 */
var findLeaves = function(root) {
    const res = [];
    const dfs = (node) => {
        if (!node) {
            return -1;
        }
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        const currentHeight = Math.max(left, right) + 1;

        if (res.length === currentHeight) {
            res.push([]);
        }
        
        res[currentHeight].push(node.val);
        
        return currentHeight;
    }
    
    dfs(root);
    
    return res;
};
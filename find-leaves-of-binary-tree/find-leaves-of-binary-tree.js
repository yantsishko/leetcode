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
    if (!root) return [];
    const res = [];
    const bfs = (node) => {
        if (!node) {
            return -1;
        }
        
        const left = bfs(node.left);
        const right = bfs(node.right);
        
        const currentHeight = Math.max(left, right) + 1;

        if (res.length === currentHeight) {
            res.push([]);
        }
        
        res[currentHeight].push(node.val);
        
        return currentHeight;
    }
    
    bfs(root);
    
    return res;
};
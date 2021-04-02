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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) return [];
    let paths = [];
    
    const dfs = (node, accum, path) => {
        if (
            !node.left
            && !node.right
            && accum === sum
        ) {
            paths.push(path);
        }
        if (node.left) {
            dfs(node.left, accum + node.left.val, [...path, node.left.val])
        }
        if (node.right) {
            dfs(node.right, accum + node.right.val, [...path, node.right.val]);
        }
    }
    
    dfs(root, root.val, [root.val]);
    
    return paths;
};
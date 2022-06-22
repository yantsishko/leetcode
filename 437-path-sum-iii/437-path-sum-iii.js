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
 * @return {number}
 */
var pathSum = function(root, sum) {
    let counter = 0;
    const search = (node, sum) => {
        if (!node) return;
        const newSum = sum - node.val;

        if (newSum === 0) {
            counter++;
        }

        search(node.left, newSum);
        search(node.right, newSum);
    }
   
    const dfs = (node, sum) => {
        if (!node) return 0;

        search(node, sum);
        dfs(node.left, sum);
        dfs(node.right, sum);
        return;
    }
    
    dfs(root, sum);
    
    return counter;
};
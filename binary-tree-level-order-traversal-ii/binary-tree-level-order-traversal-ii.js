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
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    const levels = [];
    const order = [root];
    
    while (order.length) {
        const levelValues = [];
 
        const orderLen = order.length;
        for (let i = 0; i < orderLen; i += 1) {
            const currentRoot = order.shift();
            levelValues.push(currentRoot.val);

            if (currentRoot.left) {
                order.push(currentRoot.left);
            }
            if (currentRoot.right) {
                order.push(currentRoot.right);
            }
          
        }
 
        if (levelValues.length) {
            levels.unshift(levelValues);
        }
    }
    
    return levels;
};

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const queue = [root];
    
    const result = [];
    
    while (queue.length) {
        const len = queue.length;
        result.push(queue[len - 1].val);
        for (let i = 0; i < len; i++) {
            const currentNode = queue.shift();
            
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
             if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
    
    return result;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let maxLevel = 0;
    
    const queue = [root];
    
    while (queue.length) {
        maxLevel++;
        const len = queue.length;
        for (let i = 0; i < len; i += 1) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    
    return maxLevel;
};
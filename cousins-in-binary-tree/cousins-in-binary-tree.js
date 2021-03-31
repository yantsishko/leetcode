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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const queue = [];
    queue.push(root);
    
    while (queue.length) {
        if (
            queue.filter(node => node.val === x).length
            && queue.filter(node => node.val === y).length
        ) {
            return true
        }
        const len = queue.length;
        for (let i = 0; i < len; i += 1) {
            const node = queue.shift();
            
            if (node.left && node.right) {
                if ((node.left.val === x && node.right.val === y) || (node.left.val === y && node.right.val === x)) {
                    return false;
                }
            }
            
            if (node.left) {
                queue.push(node.left);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return false;
};
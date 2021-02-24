/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    if (root === null) return [];
    
    let queue = [root];

    while (queue.length > 0) {
        const size = queue.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            let element = queue.shift();
            level.push(element.val);
            
            if (element.left !== null) {
                queue.push(element.left);
            }

            if (element.right !== null) {
                queue.push(element.right);
            }
        }
       
        result.push(level);
    }

    return result;
};
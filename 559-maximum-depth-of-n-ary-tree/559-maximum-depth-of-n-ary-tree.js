/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    const queue = [root];
    let level = 0;
    while (queue.length) {
        const len = queue.length;
        level++;
        for(let i = 0; i < len; i++) {
            let currentNode = queue.shift();
            
            for (let j = 0; j < currentNode.children.length; j++) {
                queue.push(currentNode.children[j]);
            }
        }
    }
    
    return level;
};